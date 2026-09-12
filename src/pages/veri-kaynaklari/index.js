import {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  FiExternalLink,
  FiSearch,
  FiCheckCircle,
} from 'react-icons/fi';

import styles from './styles.module.css';

const dataSources = [
  {
    slug: 'kaggle',
    title: 'Kaggle',
    description: 'Veri bilimi projeleri için dünyanın en büyük veri seti kütüphanelerinden biri. Makine öğrenmesi ve veri analizi için binlerce ücretsiz veri seti içerir.',
    features: ['Hazır Notebook\'lar', 'Yarışmalar', 'Zengin Topluluk'],
    tags: ['Genel', 'Makine Öğrenmesi'],
    url: 'https://www.kaggle.com/datasets',
  },
  {
    slug: 'tuik',
    title: 'TÜİK (Türkiye İstatistik Kurumu)',
    description: 'Türkiye\'nin demografik, ekonomik ve sosyal durumuna dair resmi istatistiklerin merkezi. Zaman serisi ve makroekonomik analizler için temel kaynak.',
    features: ['Resmi İstatistikler', 'Zaman Serileri', 'Bölgesel Veriler'],
    tags: ['Ekonomi', 'Demografi', 'Türkiye'],
    url: 'https://data.tuik.gov.tr/',
  },
  {
    slug: 'evds',
    title: 'TCMB EVDS',
    description: 'Merkez Bankası Elektronik Veri Dağıtım Sistemi. Finansal, ekonomik ve parasal göstergelerin dinamik olarak çekilebildiği resmi sistem.',
    features: ['API Desteği', 'Dinamik Sorgulama', 'Excel/CSV İndirme'],
    tags: ['Finans', 'Ekonomi', 'Türkiye'],
    url: 'https://evds2.tcmb.gov.tr/',
  },
  {
    slug: 'uci',
    title: 'UCI Machine Learning Repository',
    description: 'Makine öğrenmesi algoritmalarını test etmek için standart haline gelmiş, akademik araştırmalarda sıkça kullanılan klasik veri setleri.',
    features: ['Klasik Veri Setleri', 'Sınıflandırma', 'Kümeleme'],
    tags: ['Akademik', 'Makine Öğrenmesi'],
    url: 'https://archive.ics.uci.edu/',
  },
  {
    slug: 'worldbank',
    title: 'World Bank Open Data',
    description: 'Dünya Bankası tarafından sağlanan küresel kalkınma verileri. Ülkeler arası karşılaştırmalar ve uzun dönemli panel veri analizleri için ideal.',
    features: ['Küresel Kapsam', 'Panel Veri', 'API Desteği'],
    tags: ['Küresel', 'Ekonomi', 'Demografi'],
    url: 'https://data.worldbank.org/',
  },
  {
    slug: 'ourworldindata',
    title: 'Our World in Data',
    description: 'Yoksulluk, hastalık, iklim değişikliği gibi küresel sorunlara dair veri odaklı araştırmalar ve indirilebilir açık veri setleri.',
    features: ['İnteraktif Grafikler', 'Açık Kaynak Veri', 'Kapsamlı Raporlar'],
    tags: ['Küresel', 'Araştırma', 'Çevre'],
    url: 'https://ourworldindata.org/',
  },
  {
    slug: 'google-dataset-search',
    title: 'Google Dataset Search',
    description: 'Web üzerindeki binlerce veri havuzunu indeksleyen arama motoru. Belirli bir konuda veri seti bulmak için harika bir başlangıç noktası.',
    features: ['Geniş Kapsam', 'Arama Motoru Deneyimi', 'Çapraz Platform'],
    tags: ['Genel', 'Arama'],
    url: 'https://datasetsearch.research.google.com/',
  },
  {
    slug: 'huggingface',
    title: 'Hugging Face Datasets',
    description: 'Doğal Dil İşleme (NLP), ses ve görüntü işleme modelleri eğitmek için devasa bir veri seti kütüphanesi ve API ekosistemi.',
    features: ['NLP Verileri', 'Görsel/Ses Verileri', 'Python API'],
    tags: ['Derin Öğrenme', 'Yapay Zeka', 'NLP'],
    url: 'https://huggingface.co/datasets',
  }
];

const ALL_TAG = 'Tümü';

export default function VeriKaynaklariPage() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState(ALL_TAG);

  const allTags = useMemo(() => {
    const set = new Set();
    dataSources.forEach((d) => d.tags.forEach((t) => set.add(t)));
    return [ALL_TAG, ...[...set].sort((a, b) => a.localeCompare(b, 'tr'))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr');
    return dataSources.filter((d) => {
      const tagOk = activeTag === ALL_TAG || d.tags.includes(activeTag);
      if (!tagOk) return false;
      if (!q) return true;
      const hay = [d.title, d.description, ...d.tags].join(' ').toLocaleLowerCase('tr');
      return hay.includes(q);
    });
  }, [query, activeTag]);

  return (
    <Layout
      title="Veri Kaynakları"
      description="Veri bilimi ve istatistik projeleriniz için kullanabileceğiniz veri çekme platformları ve kaynaklar.">
      <main className={styles.page}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Keşfet & Uygula</span>
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>Veri Kaynakları</span>
          </h1>
          <p className={styles.lead}>
            Projelerinizde, araştırmalarınızda ve ödevlerinizde kullanabileceğiniz açık veri 
            platformları. İhtiyacınıza uygun veri setlerini bu kaynaklardan arayabilir 
            veya API üzerinden doğrudan çekebilirsiniz.
          </p>
        </header>

        <div className={styles.toolbar}>
          <label className={styles.searchWrap}>
            <FiSearch size={16} aria-hidden="true" />
            <input
              type="search"
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kaynaklarda ara…"
            />
          </label>

          <div className={styles.tags} role="tablist">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={activeTag === tag}
                className={`${styles.tag} ${activeTag === tag ? styles.tagActive : ''}`}
                onClick={() => setActiveTag(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>Filtreyle eşleşen kaynak bulunamadı.</p>
        ) : (
          <ul className={styles.grid}>
            {filtered.map((d) => (
              <DataSourceCard key={d.slug} d={d} />
            ))}
          </ul>
        )}

        <p className={styles.contribute}>
          Kütüphaneye yeni bir kaynak önermek ister misiniz?{' '}
          <Link to="/katkida-bulunma">Katkıda bulunma</Link> sayfasından bize ulaşın.
        </p>
      </main>
    </Layout>
  );
}

function DataSourceCard({d}) {
  return (
    <li className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.cardTags}>
          {d.tags.map((t) => (
            <span key={t} className={styles.tagPill}>
              {t}
            </span>
          ))}
        </div>
        <h2 className={styles.cardTitle}>{d.title}</h2>
        <p className={styles.cardDesc}>{d.description}</p>
      </div>

      <div className={styles.learn}>
        <span className={styles.learnLabel}>
          Öne Çıkan Özellikler
        </span>
        <ul className={styles.learnList}>
          {d.features.map((item) => (
            <li key={item}>
              <FiCheckCircle size={14} className={styles.checkIcon} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.actions}>
        <a
          className={styles.downloadBtn}
          href={d.url}
          target="_blank"
          rel="noopener noreferrer">
          Siteye Git
          <FiExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    </li>
  );
}
