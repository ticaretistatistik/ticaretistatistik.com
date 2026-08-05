import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './kavram-haritasi.module.css';

function ConceptMapContent() {
  return (
    <main className={styles.page}>
      <div className={styles.maintenanceContainer}>
        <div className={styles.iconWrapper}>
          <div className={styles.maintenanceIcon}>🚧</div>
        </div>
        <h1 className={styles.maintenanceTitle}>Kavram Ağı Yenileniyor</h1>
        <p className={styles.maintenanceText}>
          Sizlere daha zengin bir görselleştirme deneyimi sunabilmek için Kavram Ağı altyapımızı güncelliyoruz. Yepyeni veri setleri ve gelişmiş etkileşim özellikleriyle çok yakında tekrar yayındayız!
        </p>
        
        <div className={styles.progressSection}>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar}></div>
          </div>
          <span className={styles.progressText}>Çalışmalar devam ediyor...</span>
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
