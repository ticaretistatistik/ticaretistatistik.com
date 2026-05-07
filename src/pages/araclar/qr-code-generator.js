import { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import QRCodeStyling from 'qr-code-styling';
import { FiDownload, FiCopy, FiRotateCcw, FiArrowLeft } from 'react-icons/fi';
import styles from './styles.module.css';
import customStyles from './qr-code-generator.module.css';

export default function QRCodeGeneratorPage() {
  // Content state
  const [contentType, setContentType] = useState('text');
  const [textContent, setTextContent] = useState('https://example.com');
  const [urlContent, setUrlContent] = useState('https://example.com');
  const [vcardData, setVcardData] = useState({
    name: 'John Doe',
    phone: '+1234567890',
    email: 'john@example.com',
    org: 'Company',
  });
  const [wifiData, setWifiData] = useState({
    ssid: 'NetworkName',
    password: 'Password123',
    security: 'WPA',
  });

  // Logo state
  const [logoFile, setLogoFile] = useState(null);
  const [logoUrl, setLogoUrl] = useState('');
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoError, setLogoError] = useState('');

  // Customization state
  const [qrSize, setQrSize] = useState(300);
  const [errorCorrection, setErrorCorrection] = useState('H');
  const [logoSize, setLogoSize] = useState(25);
  const [qrColor, setQrColor] = useState('#0f1729');
  const [bgColor, setBgColor] = useState('#fbfaf7');
  const [qrStyle, setQrStyle] = useState('square');

  // UI state
  const [copyStatus, setCopyStatus] = useState('');
  const qrContainerRef = useRef(null);
  const qrInstanceRef = useRef(null);

  // Get current content to encode
  const getContentString = () => {
    switch (contentType) {
      case 'text':
        return textContent;
      case 'url':
        return urlContent;
      case 'vcard': {
        const vcard = [
          'BEGIN:VCARD',
          'VERSION:3.0',
          `FN:${vcardData.name}`,
          `TEL:${vcardData.phone}`,
          `EMAIL:${vcardData.email}`,
          `ORG:${vcardData.org}`,
          'END:VCARD',
        ];
        return vcard.join('\n');
      }
      case 'wifi': {
        // WiFi string format: WIFI:T:WPA;S:SSID;P:PASSWORD;;
        const type = wifiData.security === 'Open' ? 'nopass' : wifiData.security;
        return `WIFI:T:${type};S:${wifiData.ssid};P:${wifiData.password};;`;
      }
      default:
        return textContent;
    }
  };

  // Handle file upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoError('');
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoFile(file);
        setLogoPreview(event.target.result);
        setLogoUrl('');
      };
      reader.onerror = () => {
        setLogoError('Failed to read file');
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle logo URL input
  const handleLogoUrlChange = (url) => {
    setLogoUrl(url);
    setLogoError('');

    if (url) {
      setLogoLoading(true);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        // Create canvas to add white background
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        setLogoPreview(canvas.toDataURL());
        setLogoFile(null);
        setLogoLoading(false);
      };
      img.onerror = () => {
        setLogoError('Failed to load image from URL');
        setLogoLoading(false);
      };
      img.src = url;
    } else {
      setLogoPreview(null);
    }
  };

  // Generate QR code
  useEffect(() => {
    const content = getContentString();

    if (!content) return;

    const qrOptions = {
      width: qrSize,
      height: qrSize,
      data: content,
      margin: 10,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: errorCorrection,
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: logoSize / 100,
        margin: 0,
      },
      dotsOptions: {
        type: qrStyle,
        color: qrColor,
      },
      backgroundOptions: {
        color: bgColor,
      },
      image: logoPreview || undefined,
    };

    if (!qrInstanceRef.current) {
      qrInstanceRef.current = new QRCodeStyling(qrOptions);
    } else {
      qrInstanceRef.current.update(qrOptions);
    }

    if (qrContainerRef.current) {
      qrContainerRef.current.innerHTML = '';
      qrInstanceRef.current.append(qrContainerRef.current);
    }
  }, [
    contentType,
    textContent,
    urlContent,
    vcardData,
    wifiData,
    qrSize,
    errorCorrection,
    logoSize,
    qrColor,
    bgColor,
    qrStyle,
    logoPreview,
  ]);

  // Download PNG
  const handleDownloadPNG = async () => {
    if (qrInstanceRef.current) {
      const canvas = await qrInstanceRef.current.getRawData('png');
      const link = document.createElement('a');
      link.href = canvas;
      link.download = `qr-code-${Date.now()}.png`;
      link.click();
    }
  };

  // Download SVG
  const handleDownloadSVG = async () => {
    if (qrInstanceRef.current) {
      const svg = qrInstanceRef.current.getRawData('svg');
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `qr-code-${Date.now()}.svg`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  // Copy to clipboard
  const handleCopyToClipboard = async () => {
    try {
      if (qrInstanceRef.current) {
        const canvas = await qrInstanceRef.current.getRawData('png');
        const blob = await (await fetch(canvas)).blob();
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        setCopyStatus('✓ Copied to clipboard');
        setTimeout(() => setCopyStatus(''), 2000);
      }
    } catch (err) {
      setCopyStatus('✗ Failed to copy');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  // Reset all
  const handleReset = () => {
    setContentType('text');
    setTextContent('https://example.com');
    setUrlContent('https://example.com');
    setLogoFile(null);
    setLogoUrl('');
    setLogoPreview(null);
    setQrSize(300);
    setErrorCorrection('H');
    setLogoSize(25);
    setQrColor('#0f1729');
    setBgColor('#fbfaf7');
    setQrStyle('square');
  };

  return (
    <Layout title="Logolu QR Kod Oluşturucu" description="Create stylized QR codes with custom logos and colors">
      <main className={styles.page}>
        <header className={styles.head}>
          <span className={styles.eyebrow}>Araçlar · QR Kod</span>
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>Logolu QR Kod Oluşturucu</span>
          </h1>
          <p className={styles.lead}>
            Özel renk ve logo ile profesyonel QR kodlar oluşturun. Yüksek kalitede PNG veya SVG formatında indirin.
          </p>
          <Link to="/araclar" className={styles.backLink}>
            <FiArrowLeft size={16} aria-hidden="true" />
            <span>Tüm araçlar</span>
          </Link>
        </header>

        <div className={styles.toolGrid}>
          {/* Left Panel - Controls */}
          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>Ayarlar</h2>

            {/* Content Type Selector */}
            <div className={styles.field}>
              <label className={styles.label}>İçerik Türü</label>
              <div className={customStyles.radioGroup}>
                {['text', 'url', 'vcard', 'wifi'].map((type) => (
                  <label key={type} className={customStyles.radioLabel}>
                    <input
                      type="radio"
                      name="contentType"
                      value={type}
                      checked={contentType === type}
                      onChange={(e) => setContentType(e.target.value)}
                    />
                    <span>
                      {type === 'text' && 'Metin'}
                      {type === 'url' && 'URL'}
                      {type === 'vcard' && 'İletişim (vCard)'}
                      {type === 'wifi' && 'WiFi'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Content Input Based on Type */}
            <div className={styles.field}>
              {contentType === 'text' && (
                <>
                  <label className={styles.label}>Metin İçeriği</label>
                  <textarea
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                    className={styles.textarea}
                    placeholder="QR kodda kodlanacak metni girin..."
                    rows={3}
                  />
                </>
              )}

              {contentType === 'url' && (
                <>
                  <label className={styles.label}>URL</label>
                  <input
                    type="url"
                    value={urlContent}
                    onChange={(e) => setUrlContent(e.target.value)}
                    className={styles.input}
                    placeholder="https://example.com"
                  />
                </>
              )}

              {contentType === 'vcard' && (
                <>
                  <label className={styles.label}>Ad</label>
                  <input
                    type="text"
                    value={vcardData.name}
                    onChange={(e) => setVcardData({ ...vcardData, name: e.target.value })}
                    className={styles.input}
                    placeholder="John Doe"
                  />
                  <label className={styles.label} style={{ marginTop: '0.5rem' }}>
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={vcardData.phone}
                    onChange={(e) => setVcardData({ ...vcardData, phone: e.target.value })}
                    className={styles.input}
                    placeholder="+1234567890"
                  />
                  <label className={styles.label} style={{ marginTop: '0.5rem' }}>
                    E-posta
                  </label>
                  <input
                    type="email"
                    value={vcardData.email}
                    onChange={(e) => setVcardData({ ...vcardData, email: e.target.value })}
                    className={styles.input}
                    placeholder="john@example.com"
                  />
                  <label className={styles.label} style={{ marginTop: '0.5rem' }}>
                    Organizasyon
                  </label>
                  <input
                    type="text"
                    value={vcardData.org}
                    onChange={(e) => setVcardData({ ...vcardData, org: e.target.value })}
                    className={styles.input}
                    placeholder="Company"
                  />
                </>
              )}

              {contentType === 'wifi' && (
                <>
                  <label className={styles.label}>Ağ Adı (SSID)</label>
                  <input
                    type="text"
                    value={wifiData.ssid}
                    onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })}
                    className={styles.input}
                    placeholder="WiFi Network"
                  />
                  <label className={styles.label} style={{ marginTop: '0.5rem' }}>
                    Şifre
                  </label>
                  <input
                    type="password"
                    value={wifiData.password}
                    onChange={(e) => setWifiData({ ...wifiData, password: e.target.value })}
                    className={styles.input}
                    placeholder="Password"
                  />
                  <label className={styles.label} style={{ marginTop: '0.5rem' }}>
                    Güvenlik Türü
                  </label>
                  <select
                    value={wifiData.security}
                    onChange={(e) => setWifiData({ ...wifiData, security: e.target.value })}
                    className={styles.select}
                  >
                    <option>WPA</option>
                    <option>WEP</option>
                    <option>Open</option>
                  </select>
                </>
              )}
            </div>

            {/* Logo Section */}
            <div className={customStyles.divider} />
            <div className={styles.field}>
              <label className={styles.label}>Logo</label>

              {/* File Upload */}
              <div className={customStyles.uploadArea}>
                <label className={customStyles.fileInput}>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} />
                  <span>Dosya Seç</span>
                </label>
              </div>

              {/* Logo URL */}
              <label className={styles.label} style={{ marginTop: '0.75rem' }}>
                veya URL'den Yükle
              </label>
              <input
                type="url"
                value={logoUrl}
                onChange={(e) => handleLogoUrlChange(e.target.value)}
                placeholder="https://example.com/logo.png"
                className={styles.input}
                disabled={logoLoading}
              />

              {logoError && <div className={customStyles.error}>{logoError}</div>}
              {logoLoading && <div className={customStyles.info}>Yükleniyor...</div>}

              {/* Logo Preview */}
              {logoPreview && (
                <div className={customStyles.logoPreview}>
                  <img src={logoPreview} alt="Logo preview" />
                </div>
              )}
            </div>

            {/* Customization Section */}
            <div className={customStyles.divider} />
            <div className={styles.field}>
              <label className={styles.label}>
                Boyut: {qrSize}px
              </label>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={qrSize}
                onChange={(e) => setQrSize(Number(e.target.value))}
                className={styles.slider}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Hata Düzeltme Seviyesi</label>
              <select
                value={errorCorrection}
                onChange={(e) => setErrorCorrection(e.target.value)}
                className={styles.select}
              >
                <option value="L">L (7%)</option>
                <option value="M">M (15%)</option>
                <option value="Q">Q (25%)</option>
                <option value="H">H (30%)</option>
              </select>
              <p className={styles.hint}>
                Yüksek seviye = daha büyük logo desteklenir
              </p>
            </div>

            {logoPreview && (
              <div className={styles.field}>
                <label className={styles.label}>
                  Logo Boyutu: {logoSize}%
                </label>
                <input
                  type="range"
                  min="10"
                  max={errorCorrection === 'L' ? 20 : errorCorrection === 'M' ? 30 : 40}
                  step="5"
                  value={logoSize}
                  onChange={(e) => setLogoSize(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>
            )}

            <div className={styles.field}>
              <label className={styles.label}>QR Kod Rengi</label>
              <div className={customStyles.colorInputWrapper}>
                <input
                  type="color"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                  className={customStyles.colorInput}
                />
                <input
                  type="text"
                  value={qrColor}
                  onChange={(e) => setQrColor(e.target.value)}
                  className={`${styles.input} ${customStyles.colorText}`}
                  placeholder="#0f1729"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Arka Plan Rengi</label>
              <div className={customStyles.colorInputWrapper}>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className={customStyles.colorInput}
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className={`${styles.input} ${customStyles.colorText}`}
                  placeholder="#fbfaf7"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>QR Stil</label>
              <select
                value={qrStyle}
                onChange={(e) => setQrStyle(e.target.value)}
                className={styles.select}
              >
                <option value="square">Kare</option>
                <option value="dots">Nokta</option>
                <option value="rounded">Yuvarlatılmış</option>
                <option value="classy">Klasik</option>
                <option value="classy-rounded">Klasik Yuvarlatılmış</option>
              </select>
            </div>

            {/* Reset Button */}
            <button onClick={handleReset} className={customStyles.resetButton}>
              <FiRotateCcw /> Sıfırla
            </button>
          </section>

          {/* Right Panel - Preview & Export */}
          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>Önizleme</h2>

            {/* QR Code Display */}
            <div className={customStyles.qrPreview} ref={qrContainerRef} />

            {/* Export Buttons */}
            <div className={customStyles.exportButtonsGroup}>
              <button onClick={handleDownloadPNG} className={customStyles.exportButton}>
                <FiDownload /> PNG İndir
              </button>
              <button onClick={handleDownloadSVG} className={customStyles.exportButton}>
                <FiDownload /> SVG İndir
              </button>
              <button onClick={handleCopyToClipboard} className={customStyles.exportButton}>
                <FiCopy /> Panodan Kopyala
              </button>
            </div>

            {/* Copy Status */}
            {copyStatus && <div className={customStyles.status}>{copyStatus}</div>}
          </section>
        </div>
      </main>
    </Layout>
  );
}
