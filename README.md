# Ticaret İstatistik

İstanbul Ticaret Üniversitesi İstatistik Bölümü öğrencileri için hazırlanan açık kaynak yardımcı doküman ve topluluk portalı. Ders notları, topluluk etkinlikleri, yönetim kurulu, blog yazıları ve arşivlere tek bir noktadan modern bir arayüzle erişim sağlar.

**Canlı URL:** [ticaretistatistik.com](https://ticaretistatistik.com)

## İçindekiler

1. [Proje Hakkında](#proje-hakkında)
2. [Teknoloji Yığını](#teknoloji-yığını)
3. [Gereksinimler](#gereksinimler)
4. [Kurulum](#kurulum)
5. [Geliştirme](#geliştirme)
6. [Proje Yapısı](#proje-yapısı)
7. [İçerik Yönetimi (MDX)](#i̇çerik-yönetimi-mdx)
8. [Tasarım Sistemi](#tasarım-sistemi)
9. [Katkıda Bulunma Rehberi](#katkıda-bulunma-rehberi)
10. [Lisans](#lisans)

## Proje Hakkında

Önceki altyapısından (Docusaurus) tamamen modern bir **Next.js (App Router)** mimarisine geçiş yapan sitemiz; hız, esneklik ve daha zengin kullanıcı deneyimi sunar. Site üzerinden; ders dokümanları, blog yazıları, etkinlik takvimleri (Google Calendar API entegrasyonlu), geçmiş panel arşivleri ve topluluk iletişim araçlarına ulaşılabilmektedir.

## Teknoloji Yığını

- **Next.js 15 (App Router)** — Sunucu tarafı render (SSR) ve gelişmiş sayfa yönlendirmesi
- **React 19** — Modern arayüz inşası
- **Tailwind CSS v3** — Utility-first, marka renklerine göre özelleştirilmiş stil sistemi
- **Velite** — Yüksek performanslı ve tipli (type-safe) Markdown/MDX içerik yönetimi
- **Lucide React** — Minimalist ve modern ikon seti
- **Radix UI** — Erişilebilir ve stil bağımsız UI (Search Modal vb. bileşenler)
- **Google Calendar API v3** — Dinamik "Etkinlikler" sayfası entegrasyonu

## Gereksinimler

- [Git](https://git-scm.com/downloads)
- [Node.js ≥ 20](https://nodejs.org/en/download/) (`node -v` ile kontrol edebilirsin)

## Kurulum

```bash
git clone git@github.com:ticaretistatistik/ticaretistatistik.com.git
cd ticaretistatistik.com
npm install
```

### Çevre Değişkenleri (.env)

Etkinlikler sayfasının düzgün çalışabilmesi için `.env` dosyasını oluşturmanız ve Google Takvim bilgilerinizi eklemeniz gerekmektedir:

```env
GOOGLE_CALENDAR_API_KEY="Sizin_Google_API_Anahtarınız"
GOOGLE_CALENDAR_ID="ticaretstat@gmail.com"
```
*(Not: Bu bilgiler girilmezse Etkinlikler sayfası hata vermez, yalnızca "planlanmış etkinlik bulunmuyor" tasarımı gösterir.)*

## Geliştirme

```bash
npm run dev      # Development sunucusunu başlatır: http://localhost:3000
npm run build    # Production (canlı) çıktısını üretir ve Velite MDX dosyalarını derler
npm run start    # Derlenmiş production çıktısını yerelde sunar
```

## Proje Yapısı

```text
.
├── app/                    # Next.js App Router sayfaları (page.tsx, layout.tsx)
│   ├── (marketing)/        # Anasayfa
│   ├── arsiv/              # Etkinlik ve video arşivi
│   ├── blog/               # Blog rotaları
│   ├── docs/               # Eğitim dokümanları
│   ├── ekibimiz/           # Takım sayfası
│   └── etkinlikler/        # Dinamik Google Takvim etkinlikleri
├── components/             # Tekrar kullanılabilir UI bileşenleri (Navbar, Footer, VideoGallery)
├── content/                # Velite ile yönetilen MDX/Markdown dosyaları (blog, docs, archive)
├── lib/                    # Helper fonksiyonları ve statik datalar (team.ts, calendar.ts)
├── public/                 # Statik varlıklar (favicon vb.)
├── static/                 # Genel proje içi görseller (static/img/)
├── velite.config.ts        # MDX içerik şeması ve yapılandırması
└── tailwind.config.ts      # Tailwind CSS yapılandırması (Marka renkleri vb.)
```

## İçerik Yönetimi (MDX)

Blog yazıları, dokümanlar ve arşiv verileri artık `content/` klasörü altından yönetilmektedir.

### Yeni Blog Yazısı Ekleme
`content/blog/yeni-yazi.mdx` dosyası oluşturun:
```mdx
---
title: "Örnek Yazı"
description: "Bu yazının kısa bir açıklaması."
date: 2026-10-15
published: true
---
Yazınızın içeriği buraya gelecek...
```

*Not: Tüm MDX dosyaları `velite` aracıyla otomatik olarak okunur ve `app/` altındaki sayfalarda derlenip tip (type) desteği ile sunulur.*

## Tasarım Sistemi

Sitenin kurumsal renkleri, global değişkenler olarak `app/globals.css` ve `tailwind.config.ts` dosyalarında tanımlanmıştır:
- **Brand Accent (Sarı)**: `--brand-accent` (`#f5c518`) — Hover efektleri, butonlar ve ikonlar
- **Brand Ink (Koyu/Lacivert-Siyah)**: `--brand-ink` (`#0a0a0a`) — Başlıklar ve ana metinler
- Proje genelinde `brand-blue` veya `brand-navy` gibi eski Docusaurus class'ları yerine standart Tailwind (`slate`, `zinc` vb.) veya marka özel `brand-accent`, `brand-ink` sınıfları kullanılmaktadır.

## Katkıda Bulunma Rehberi

Yazı yazmak veya kod katkısında bulunmak için PR'lar, issue'lar ve tartışmalar her zaman açıktır. Repoyu "fork"layıp kendi değişikliklerinizi ana dala (main) PR olarak gönderebilirsiniz.

## Lisans

Bu proje `GPL-3.0` lisansı ile lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.
