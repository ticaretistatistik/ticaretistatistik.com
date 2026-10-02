import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Etkinlik (Yaklaşan / Geçmiş)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Etkinlik Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Etkinlik Durumu',
      type: 'string',
      options: {
        list: [
          { title: 'Yaklaşan Etkinlik (Upcoming)', value: 'upcoming' },
          { title: 'Geçmiş Etkinlik (Past)', value: 'past' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      description: 'Örn: Eğitim, Panel, Atölye, Teknik Gezi',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Etkinlik Tarihi (Sıralama için)',
      type: 'datetime',
      description: 'Etkinlikleri sıraya koymak için arka planda kullanılır.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayDate',
      title: 'Görünecek Tarih Metni (Örn: 15 Ekim)',
      type: 'string',
      description: 'Kullanıcılara gösterilecek tarih formatı.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Saat (Örn: 14:00 - 16:00)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Konum / Yer',
      type: 'string',
      description: 'Örn: Sütlüce Kampüsü, E-503 veya Online (Google Meet)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Etkinlik Açıklaması',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'displayDate',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${subtitle} | ${status === 'upcoming' ? '🟡 Yaklaşan' : '⚪ Geçmiş'}`,
      }
    }
  },
})
