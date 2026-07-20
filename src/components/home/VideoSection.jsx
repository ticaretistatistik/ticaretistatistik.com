import {useRef, useState} from 'react';
import ReactPlayer from 'react-player';
import {FiPlayCircle} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';

import InstagramEmbed from './InstagramEmbed';
import styles from './VideoSection.module.css';

const videos = [
  {
    type: 'youtube',
    title: 'Prof. Dr. Özlem Deniz Başar İstatistik Bölümünü Anlatıyor',
    label: 'Bölüm Tanıtımı',
    url: 'https://www.youtube.com/watch?v=njJBBiyFLxQ',
  },
  {
    type: 'youtube',
    title: 'İstatistik Bölüm Tanıtım Programı',
    label: 'Tanıtım',
    url: 'https://www.youtube.com/watch?v=zLkbLQyRO_E',
  },
  {
    type: 'youtube',
    title: 'Öğrenci Gözünden İstatistik Bölümü',
    label: 'Öğrenci Gözünden',
    url: 'https://www.youtube.com/watch?v=uoSR9bz2Xz4',
  },
  {
    type: 'instagram',
    title: 'Veri Bilimi İçin 3 Program',
    label: 'Veri Bilimi',
    url: 'https://www.instagram.com/reel/DMDPjlStS1h/',
    // Instagram /media/ endpoint no longer works; host a local cover frame.
    thumbnail: '/img/videos/reel-DMDPjlStS1h.jpg',
  },
];

function youtubeId(url) {
  const m = url.match(/[?&]v=([^&]+)/);
  return m ? m[1] : '';
}

function thumbFor(video) {
  if (video.thumbnail) return video.thumbnail;
  if (video.type === 'instagram') return '';
  const id = youtubeId(video.url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
}

function hideBrokenThumb(e) {
  e.currentTarget.style.display = 'none';
}

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const current = videos[currentIndex];
  const isInstagram = current.type === 'instagram';

  const handleSelect = (i) => {
    if (i === currentIndex) return;
    setCurrentIndex(i);
    setMounted(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>Bölümü tanıyın</p>
          <h2 className={styles.title}>Akademisyenlerimizden ve öğrencilerimizden</h2>
          <p className={styles.lead}>
            Bölüm başkanımızın tanıtımından mezunlarımızın kariyer hikâyelerine —
            istatistiği neden ve nasıl çalıştığımızı anlatan kısa videolar.
          </p>
        </header>

        <div ref={heroRef} className={styles.heroCard}>
          <div
            className={`${styles.heroPlayer} ${
              isInstagram ? styles.heroPlayerInstagram : ''
            }`}>
            {isInstagram ? (
              mounted ? (
                <InstagramEmbed
                  key={current.url}
                  url={current.url}
                  className={styles.instagramEmbed}
                />
              ) : (
                <button
                  type="button"
                  className={styles.igPreview}
                  onClick={() => setMounted(true)}
                  aria-label={`${current.title} oynat`}>
                  {thumbFor(current) && (
                    <img
                      src={thumbFor(current)}
                      alt=""
                      className={styles.igPreviewImg}
                      onError={hideBrokenThumb}
                    />
                  )}
                  <span className={styles.playIcon} aria-hidden="true">
                    <FiPlayCircle size={72} />
                  </span>
                </button>
              )
            ) : mounted ? (
              <ReactPlayer
                key={current.url}
                url={current.url}
                width="100%"
                height="100%"
                controls
                playing
                config={{
                  youtube: {playerVars: {modestbranding: 1, rel: 0}},
                }}
              />
            ) : (
              <ReactPlayer
                key={`light-${current.url}`}
                url={current.url}
                light={thumbFor(current)}
                width="100%"
                height="100%"
                controls
                playIcon={
                  <span className={styles.playIcon} aria-hidden="true">
                    <FiPlayCircle size={72} />
                  </span>
                }
                onClickPreview={() => setMounted(true)}
                config={{
                  youtube: {playerVars: {modestbranding: 1, rel: 0}},
                }}
              />
            )}
          </div>
          <div className={styles.heroCaption}>
            <span className={styles.heroLabel}>{current.label}</span>
            <h3 className={styles.heroTitle}>{current.title}</h3>
          </div>
        </div>

        <ul className={styles.thumbStrip} role="list">
          {videos.map((video, i) => {
            const active = i === currentIndex;
            const thumbSrc = thumbFor(video);
            return (
              <li key={video.url}>
                <button
                  type="button"
                  className={`${styles.thumb} ${active ? styles.thumbActive : ''}`}
                  onClick={() => handleSelect(i)}
                  aria-pressed={active}>
                  <span className={styles.thumbMedia}>
                    {thumbSrc && (
                      <img
                        src={thumbSrc}
                        alt={video.title}
                        className={styles.thumbImg}
                        loading="lazy"
                        onError={hideBrokenThumb}
                      />
                    )}
                    <span className={styles.thumbOverlay} aria-hidden="true">
                      <FiPlayCircle size={28} />
                    </span>
                    {video.type === 'instagram' && (
                      <span className={styles.platformBadge} aria-hidden="true">
                        <FaInstagram size={14} />
                      </span>
                    )}
                    {active && <span className={styles.nowBadge}>Şimdi</span>}
                  </span>
                  <span className={styles.thumbBody}>
                    <span className={styles.thumbLabel}>{video.label}</span>
                    <span className={styles.thumbTitle}>{video.title}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
