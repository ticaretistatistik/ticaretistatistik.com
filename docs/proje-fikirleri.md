---
sidebar_position: 99
title: 🚀 Proje Geliştirme Fikirleri
description: "Ticaret İstatistik platformu için planlanan gelecek özellikler ve eklentiler."
---

# 🚀 Gelecek Proje Fikirleri

Bu belge, projenin ilerleyen aşamalarında platforma dahil edilebilecek ve kullanıcı deneyimini zenginleştirecek interaktif fikirleri ve modül önerilerini barındırır.

## 1. İnteraktif "Bilgi Yarışması" (Quiz) Modülü 🧠
Sözlükteki dinamik veriler kullanılarak kullanıcıların kendilerini test edebilecekleri bir bölüm:
- **İşleyiş:** Kullanıcılara rastgele bir tanım verilir ve 4 seçenek sunulur (seçenekler sözlükteki diğer terimlerden rastgele çekilir).
- **Etkileşim:** Doğru bilindikçe puan artar, ardışık doğrularda (streak) küçük konfeti animasyonları patlar.
- **Amaç:** Sitede geçirilen süreyi artırmak ve ticaret/istatistik öğrencilerinin sınavlarına eğlenceli bir şekilde hazırlanmalarını sağlamak.

## 2. "Günün Terimi" Vurgusu 🌟
- **İşleyiş:** Ana sayfaya veya Sözlük sayfasının tepe kısmına, her gün rastgele değişen şık bir "Günün Terimi" (Term of the Day) kartı eklenir.
- **Amaç:** Siteye sık giren ziyaretçileri yeni kavramlar öğrenmeye teşvik etmek ve sayfanın sürekli güncel hissettirmesini sağlamak.

## 3. Site İçi Akıllı Arama (Local Search) 🔍
- **İşleyiş:** Sayfanın sağ üst köşesine, MacOS Spotlight tarzı (`Cmd+K` veya `Ctrl+K` ile açılan) anlık sonuç veren bir arama çubuğu eklenir.
- **Teknoloji:** Docusaurus'un yerel arama eklentileri (örn: `docusaurus-search-local`) veya Algolia DocSearch kullanılarak entegre edilir.
- **Amaç:** Sözlük ve dokümantasyon (SPSS, R, Python vb.) genişledikçe kullanıcıların aradıkları spesifik bilgiye saniyeler içinde ulaşabilmesi.

## 4. Canlı İstatistik / Grafik Laboratuvarı 📊
- **İşleyiş:** Siteye sadece metin tabanlı değil, görsel veri analizlerini barındıran bir "Veri Laboratuvarı" sekmesi eklenir.
- **Teknoloji:** *Recharts* veya *Chart.js* kütüphaneleri.
- **Amaç:** Türkiye'nin ihracat/ithalat dengesi, enflasyon-faiz ilişkisi gibi 2-3 adet modern, interaktif (üzerine gelince değerleri gösteren animasyonlu) grafik gömerek platformun profesyonelliğini en üst noktaya taşımak.

## 5. PDF Cheat-Sheet (Kopya Kağıdı) İndirici 📄
- **İşleyiş:** Sözlük verilerini otomatik olarak derleyip, iki sütunlu çok şık tasarlanmış bir PDF formatına dönüştüren bir buton.
- **Amaç:** Öğrencilerin vize ve finaller öncesi tüm terimlerin ve kavramların kısa özetlerini tek tuşla indirip cihazlarında saklayabilmeleri.
