import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {tags} from 'sanity-plugin-tags-v4'
import {DocumentIcon} from '@sanity/icons'
import {CogIcon} from '@sanity/icons'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['aboutPage, homePage, siteMetadata'])

export default defineConfig({
  name: 'default',
  title: 'last-page',

  projectId: '9irw40na',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S) => 
      S.list()
      .title('Content').items([
        S.listItem()
          .title('Site Metadata')
          .id('siteMetadata')
          .icon(CogIcon)
          .child(
            S.document().schemaType('siteMetadata').documentId('siteMetadata').title('Site Metadata')
          ),
           S.divider(),
           S.listItem()
              .title('Home Page')
              .id('homePage')
              .icon(DocumentIcon)
              .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
              S.listItem()
              .title('About Page')
              .id('aboutPage')
              .icon(DocumentIcon)
              .child(S.document().schemaType('aboutPage').documentId('aboutPage').title('About Page')),
              S.divider(),
              S.documentTypeListItem('review').title('Reviews'),
      ])
  }), visionTool(), media(), tags({})],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
  form: {
    image: {
      assetSources: () => [mediaAssetSource],
    },
  },
})
