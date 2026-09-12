import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  FiExternalLink,
  FiSearch,
  FiFilter,
  FiDatabase,
} from 'react-icons/fi';

import styles from './styles.module.css';

const dataSources = [
  {
    slug: 'kaggle',
    title: 'Kaggle',
    description: 'Veri bilimi projeleri için dünyanın en büyük kütüphanelerinden biri. Makine öğrenmesi için binlerce ücretsiz veri seti ve yarışma içerir.',
    category: 'Makine Öğrenmesi',
    url: 'https://www.kaggle.com/datasets',
  },
  {
    slug: 'tuik',
    title: 'TÜİK (Türkiye İstatistik Kurumu)',
    description: 'Türkiye\'nin demografik, ekonomik ve sosyal durumuna dair resmi istatistiklerin merkezi. Makroekonomik analizler için temel kaynak.',
    category: 'Ekonomi & Türkiye',
    url: 'https://data.tuik.gov.tr/',
  },
  {
    slug: 'evds',
    title: 'TCMB EVDS',
    description: 'Merkez Bankası Elektronik Veri Dağıtım Sistemi. Finansal ve parasal göstergelerin API ile veya dinamik olarak çekilebildiği resmi sistem.',
    category: 'Ekonomi & Türkiye',
    url: 'https://evds2.tcmb.gov.tr/',
  },
  {
    slug: 'uci',
    title: 'UCI Machine Learning Repository',
    description: 'Makine öğrenmesi algoritmalarını test etmek için standart haline gelmiş, akademik araştırmalarda sıkça kullanılan klasik veri setleri.',
    category: 'Akademik',
    url: 'https://archive.ics.uci.edu/',
  },
  {
    slug: 'worldbank',
    title: 'World Bank Open Data',
    description: 'Dünya Bankası tarafından sağlanan küresel kalkınma verileri. Ülkeler arası karşılaştırmalar ve uzun dönemli panel veri analizleri için ideal.',
    category: 'Küresel',
    url: 'https://data.worldbank.org/',
  },
  {
    slug: 'ourworldindata',
    title: 'Our World in Data',
    description: 'Yoksulluk, hastalık, iklim değişikliği gibi küresel sorunlara dair veri odaklı araştırmalar ve indirilebilir açık veri setleri.',
    category: 'Araştırma & Çevre',
    url: 'https://ourworldindata.org/',
  },
  {
    slug: 'google-dataset-search',
    title: 'Google Dataset Search',
    description: 'Web üzerindeki binlerce veri havuzunu indeksleyen arama motoru. Belirli bir konuda araştırma yaparken harika bir başlangıç noktası.',
    category: 'Arama Motoru',
    url: 'https://datasetsearch.research.google.com/',
  },
  {
    slug: 'huggingface',
    title: 'Hugging Face Datasets',
    description: 'Doğal Dil İşleme (NLP), ses ve görüntü işleme modelleri eğitmek için devasa bir veri seti kütüphanesi ve API ekosistemi.',
    category: 'Derin Öğrenme',
    url: 'https://huggingface.co/datasets',
  },
  {
    slug: 'eurostat',
    title: 'Eurostat',
    description: 'Avrupa Birliği İstatistik Ofisi. Avrupa ülkelerine dair yüksek kaliteli ekonomik, sosyal ve bölgesel istatistikler sunar.',
    category: 'Küresel',
    url: 'https://ec.europa.eu/eurostat',
  }
];

const ALL_CATEGORY = 'Tüm Kaynaklar';

export default function VeriKaynaklariPage() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState(ALL_CATEGORY);

  const categories = useMemo(() => {
    const set = new Set();
    dataSources.forEach((d) => set.add(d.category));
    return [ALL_CATEGORY, ...[...set].sort((a, b) => a.localeCompare(b, 'tr'))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr');
    return dataSources.filter((d) => {
      const catOk = activeCat === ALL_CATEGORY || d.category === activeCat;
      if (!catOk) return false;
      if (!q) return true;
      const hay = [d.title, d.description, d.category].join(' ').toLocaleLowerCase('tr');
      return hay.includes(q);
    });
  }, [query, activeCat]);

  return (
    <Layout
      title="Veri Kaynakları"
      description="Veri bilimi ve istatistik projeleriniz için güvenilir veri platformları.">
      
      <div className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>Veri Kaynakları Kataloğu</h1>
          <p className={styles.heroSubtitle}>
            İstatistik ve veri bilimi projeleriniz için özenle seçilmiş, 
            güvenilir ve erişilebilir veri platformları.
          </p>
        </div>
      </div>

      <div className="container padding-vert--lg">
        <div className="row">
          {/* Sidebar */}
          <aside className="col col--3">
            <div className={styles.sidebar}>
              
              <div className={styles.searchBox}>
                <FiSearch className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Kaynaklarda ara..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>
                  <FiFilter /> Kategoriler
                </h3>
                <ul className={styles.filterList}>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        className={`${styles.filterBtn} ${activeCat === cat ? styles.filterBtnActive : ''}`}
                        onClick={() => setActiveCat(cat)}>
                        {cat}
                        <span className={styles.catBadge}>
                          {cat === ALL_CATEGORY 
                            ? dataSources.length 
                            : dataSources.filter(d => d.category === cat).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.sidebarHelp}>
                <p>Eksik olduğunu düşündüğünüz bir kaynak mı var?</p>
                <Link to="/katkida-bulunma" className="button button--secondary button--sm button--block">
                  Bize Bildirin
                </Link>
              </div>

            </div>
          </aside>

          {/* Main Grid */}
          <main className="col col--9">
            {filtered.length === 0 ? (
              <div className={styles.noResults}>
                <FiDatabase size={48} className={styles.noResultsIcon} />
                <h3>Sonuç Bulunamadı</h3>
                <p>Arama kriterlerinize uyan bir veri kaynağı bulamadık.</p>
                <button 
                  className="button button--primary button--outline"
                  onClick={() => { setQuery(''); setActiveCat(ALL_CATEGORY); }}>
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <div className={styles.grid}>
                {filtered.map((d) => (
                  <div key={d.slug} className={styles.card}>
                    <div className={styles.cardBody}>
                      <span className={styles.cardCategory}>{d.category}</span>
                      <h3 className={styles.cardTitle}>{d.title}</h3>
                      <p className={styles.cardDesc}>{d.description}</p>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href={d.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                        Siteye Git <FiExternalLink />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}
