import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'blockContent',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'blockContent',
    })
  ],
})
