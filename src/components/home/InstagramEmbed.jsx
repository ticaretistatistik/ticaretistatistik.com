import {useEffect} from 'react';

const SCRIPT_ID = 'instagram-embed-script';

function loadInstagramScript(onReady) {
  if (typeof window === 'undefined') return;
  if (window.instgrm) {
    onReady();
    return;
  }
  const existing = document.getElementById(SCRIPT_ID);
  if (existing) {
    existing.addEventListener('load', onReady, {once: true});
    return;
  }
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  script.addEventListener('load', onReady, {once: true});
  document.body.appendChild(script);
}

export default function InstagramEmbed({url, className}) {
  useEffect(() => {
    loadInstagramScript(() => window.instgrm?.Embeds.process());
  }, [url]);

  return (
    <div className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{margin: 0, width: '100%', maxWidth: '100%'}}
      />
    </div>
  );
}
