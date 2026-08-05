import {readdirSync, readFileSync, writeFileSync, statSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'blog');
const OUT_JSON = join(__dirname, '..', 'src', 'data', 'latest-posts.json');

const MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

function formatDate(dateStr) {
  // expects YYYY-MM-DD
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  return `${day} ${MONTHS[month]} ${year}`;
}

function stripMarkdown(text) {
  return text
    .replace(/!\[.*?\]\(.*?\)/g, '') // remove images
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // replace links with text
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // remove bold
    .replace(/(\*|_)(.*?)\1/g, '$2') // remove italic
    .replace(/#+\s+(.*)/g, '$1') // remove headings
    .replace(/>\s+(.*)/g, '$1') // remove blockquotes
    .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // remove inline code
    .replace(/\n+/g, ' ') // replace newlines with space
    .trim();
}

function getPosts() {
  const posts = [];
  const entries = readdirSync(BLOG_DIR);

  for (const entry of entries) {
    const entryPath = join(BLOG_DIR, entry);
    if (!statSync(entryPath).isDirectory()) continue;

    // Pattern: YYYY-MM-DD-slug
    const match = entry.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
    if (!match) continue;

    const dateStr = match[1];
    let mdContent = '';
    
    // Check for index.md or index.mdx
    try {
      mdContent = readFileSync(join(entryPath, 'index.md'), 'utf8');
    } catch (e) {
      try {
        mdContent = readFileSync(join(entryPath, 'index.mdx'), 'utf8');
      } catch (e2) {
        continue; // skip if no index file found
      }
    }

    const {data, content} = matter(mdContent);
    const slug = data.slug || match[2];
    const tags = data.tags || [];
    let excerpt = '';

    // Extract excerpt before <!-- truncate -->
    if (content.includes('<!-- truncate -->')) {
      const rawExcerpt = content.split('<!-- truncate -->')[0];
      excerpt = stripMarkdown(rawExcerpt);
      if (excerpt.length > 160) {
        excerpt = excerpt.substring(0, 157) + '...';
      }
    } else {
      excerpt = stripMarkdown(content).substring(0, 160) + '...';
    }

    // Rough reading time calculation (200 words per min)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200)) + ' dk';

    posts.push({
      title: data.title || entry,
      excerpt,
      date: formatDate(dateStr),
      rawDate: dateStr,
      readingTime,
      to: `/blog/${slug}`,
      tag: tags.length > 0 ? (tags[0].charAt(0).toUpperCase() + tags[0].slice(1)) : 'Blog',
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => b.rawDate.localeCompare(a.rawDate));
}

try {
  const posts = getPosts();
  const latestPosts = posts.slice(0, 3);
  writeFileSync(OUT_JSON, JSON.stringify(latestPosts, null, 2) + '\n', 'utf8');
  console.log(`[latest-posts] Wrote ${latestPosts.length} posts to ${OUT_JSON}`);
} catch (error) {
  console.error('[latest-posts] Error building latest posts:', error);
  process.exit(1);
}
