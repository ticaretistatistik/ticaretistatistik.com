import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './kavram-haritasi.module.css';

function ConceptMapContent() {
  return (
    <main className={styles.page}>
      <div className={styles.maintenanceContainer}>
        
        <div className={styles.iconWrapper}>
          <svg className={styles.maintenanceIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>

        <h1 className={styles.maintenanceTitle}>Kavram Ağı Yenileniyor</h1>
        
        <p className={styles.maintenanceText}>
          İstatistik terimleri arasındaki yapısal ilişkileri çok daha iyi keşfedebilmeniz için altyapımızı güncelliyoruz. Yeni veri setleri ve gelişmiş etkileşim motoruyla çok yakında tekrar yayındayız.
        </p>
        
        <div className={styles.progressSection}>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar}></div>
          </div>
          <span className={styles.progressText}>Altyapı Güncelleniyor</span>
        </div>

        <Link to="/sozluk" className={styles.actionBtn}>
          Sözlüğe Dön
        </Link>
        
      </div>
    </main>
  );
}

export default function ConceptMapPage() {
  return (
    <Layout
      title="Kavram Haritası (Bakımda)"
      description="Kavram Haritası sayfamız şu anda bakım aşamasındadır.">
      <ConceptMapContent />
    </Layout>
  );
}
