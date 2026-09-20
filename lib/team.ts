export interface TeamMember {
  name: string;
  role: string;
  image?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ahmet Yılmaz",
    role: "Yönetim Kurulu Başkanı",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Ayşe Demir",
    role: "Başkan Yardımcısı",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Mehmet Kaya",
    role: "Eğitim Koordinatörü",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Zeynep Çelik",
    role: "Etkinlik Koordinatörü",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: null,
  },
  {
    name: "Caner Öztürk",
    role: "Sosyal Medya Sorumlusu",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Elif Şahin",
    role: "Proje Yöneticisi",
    image: null,
    linkedin: "https://linkedin.com",
    twitter: null,
  }
];
