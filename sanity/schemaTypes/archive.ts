import { defineField, defineType } from 'sanity'

export const archive = defineType({
  name: 'archive',
  title: 'Arşiv (Geçmiş Etkinlikler)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Etkinlik Başlığı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Uzantısı)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Etkinlik Tarihi',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cover',
      title: 'Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin',
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Fotoğraf Galerisi',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Etkinlikten kareler (Birden fazla fotoğraf ekleyebilirsiniz)',
    }),
    defineField({
      name: 'content',
      title: 'İçerik Detayları',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'cover',
    },
  },
})
