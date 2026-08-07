import React from 'react';
import Layout from '@theme/Layout';
import { FiMail, FiMapPin, FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi';
import styles from './iletisim.module.css';

export default function Iletisim() {
  return (
    <Layout
      title="İletişim"
      description="Ticaret İstatistik Topluluğu ile iletişime geçin. Görüş, öneri ve sorularınız için buradayız.">
      <main className={styles.page}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>BİZE ULAŞIN</span>
          <h1 className={styles.title}>
            Bizimle <span className={styles.titleAccent}>İletişime Geçin</span>
          </h1>
          <p className={styles.lead}>
            Topluluğumuz hakkında sorularınız, iş birliği teklifleriniz veya 
            herhangi bir konu için aşağıdaki yollardan bize ulaşabilirsiniz.
          </p>
        </header>

        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <a href="mailto:iletisim@ticaretistatistik.com" className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <FiMail />
              </div>
              <div className={styles.infoCardContent}>
                <h3>E-posta Adresimiz</h3>
                <p>iletisim@ticaretistatistik.com</p>
              </div>
            </a>

            <a href="https://instagram.com/ticaretistatistik" target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
              <div className={styles.iconWrapper} style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                <FiInstagram />
              </div>
              <div className={styles.infoCardContent}>
                <h3>Instagram</h3>
                <p>@ticaretistatistik</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/company/i%CC%87statistik-toplulu%C4%9Futic" target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
              <div className={styles.iconWrapper} style={{ background: '#0077b5' }}>
                <FiLinkedin />
              </div>
              <div className={styles.infoCardContent}>
                <h3>LinkedIn</h3>
                <p>İstatistik Topluluğu</p>
              </div>
            </a>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper} style={{ background: 'var(--ifm-color-emphasis-800)' }}>
                <FiMapPin />
              </div>
              <div className={styles.infoCardContent}>
                <h3>Adres</h3>
                <p>İstanbul Ticaret Üniversitesi<br />Sütlüce Yerleşkesi</p>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={(e) => { e.preventDefault(); alert('Mesajınız başarıyla gönderildi! (Temsili Form)'); }}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Adınız Soyadınız</label>
                <input type="text" id="name" name="name" className={styles.input} placeholder="Örn: Ahmet Yılmaz" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>E-posta Adresiniz</label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="Örn: ahmet@example.com" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Konu</label>
                <input type="text" id="subject" name="subject" className={styles.input} placeholder="Neden ulaşıyorsunuz?" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mesajınız</label>
                <textarea id="message" name="message" className={styles.textarea} placeholder="Mesajınızı buraya yazın..." required></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                <FiSend /> Gönder
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
