import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorLink',
      title: 'Author Link',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => `${doc.title} ${doc.artist}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    }),
    defineField({
      name: 'pubDate',
      title: 'Publish Date',
      type: 'date',
    }),
    defineField({
      name: 'albumArt',
      title: 'Album Art',
      type: 'image',
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'tags',
      options: {
        includeFromRelated: 'format',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Genres/Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'tags',
      },
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5).precision(1),
    }),
    defineField({
      name: 'dek',
      title: 'Dek',
      type: 'blockContent',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
})
