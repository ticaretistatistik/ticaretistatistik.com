import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Yazısı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
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
      name: 'description',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'date',
      title: 'Yayınlanma Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'cover',
      title: 'Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true, // Görselin odak noktasını seçmeye yarar
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin (Alt Text)',
        }
      ]
    }),
    defineField({
      name: 'authors',
      title: 'Yazarlar',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Yazarların isimlerini ekleyin',
    }),
    defineField({
      name: 'tags',
      title: 'Etiketler (Tags)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'content',
      title: 'İçerik',
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
      subtitle: 'description',
      media: 'cover',
    },
  },
})
