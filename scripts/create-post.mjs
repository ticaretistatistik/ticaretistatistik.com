import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const slugify = (str) => {
  const trMap = {
    'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
    'Ç': 'C', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U'
  };
  return str
    .replace(/[çğıöşüÇĞİÖŞÜ]/g, match => trMap[match])
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '') // Harf, rakam, boşluk ve tire dışındakileri sil
    .replace(/\s+/g, '-') // Boşlukları tireye çevir
    .replace(/-+/g, '-'); // Birden fazla tireyi tek tireye düşür
};

const args = process.argv.slice(2);
let title = args.join(' ');

const createPost = (postTitle) => {
  // Bugünün tarihini YYYY-MM-DD formatında al
  const dateStr = new Date().toISOString().split('T')[0];
  const slug = slugify(postTitle);
  const dirName = `${dateStr}-${slug}`;
  const blogDir = path.join(process.cwd(), 'blog', dirName);
  
  if (fs.existsSync(blogDir)) {
    console.error(`\n❌ Hata: Bu dizin zaten mevcut: blog/${dirName}`);
    process.exit(1);
  }

  // Klasörü oluştur
  fs.mkdirSync(blogDir, { recursive: true });
  
  // Markdown dosya içeriğini hazırla
  const content = `---
slug: ${slug}
title: "${postTitle}"
authors: [yigitefeavci]
tags: []
---

Bu yazının giriş paragrafı...

<!--truncate-->

Buraya yazının devamı gelecek.
`;

  // Dosyayı kaydet
  const filePath = path.join(blogDir, 'index.md');
  fs.writeFileSync(filePath, content, 'utf8');

  console.log(`\n✅ Başarılı! Yeni blog yazısı taslağı oluşturuldu.`);
  console.log(`📁 Dizin: blog/${dirName}`);
  console.log(`📄 Dosya: blog/${dirName}/index.md`);
  console.log(`\nHemen yazmaya başlamak için ilgili dosyayı editörünüzde açabilirsiniz.\n`);
  process.exit(0);
};

if (title) {
  createPost(title);
} else {
  rl.question('📝 Blog yazısının başlığı nedir? ', (answer) => {
    if (!answer.trim()) {
      console.error('❌ Başlık boş olamaz.');
      process.exit(1);
    }
    createPost(answer);
  });
}
