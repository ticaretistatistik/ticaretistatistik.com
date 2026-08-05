import Link from '@docusaurus/Link';
import styles from './RecentPosts.module.css';
import posts from '@site/src/data/latest-posts.json';

export default function RecentPosts() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Son yazılar</p>
            <h2 className={styles.title}>Blogdan</h2>
          </div>
          <Link to="/blog" className={styles.viewAll}>
            Tümünü gör
            <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <Link key={i} to={post.to} className={styles.card}>
              <div className={styles.cardBody}>
                <span className={styles.tag}>{post.tag}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
              </div>
              <div className={styles.cardMeta}>
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
