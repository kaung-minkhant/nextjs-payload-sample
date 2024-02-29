import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Media from './collections/media'
import Pages from './collections/pages'
import BlogPosts from './collections/blogPosts'
import PageTemplates from './collections/pageTemplates/pageTemplates'
import Header from './globals/header'
import Footer from './globals/footer'
import RecentBlogPosts from './globals/recentBlogPosts'

export default buildConfig({
  serverURL: "http://localhost:4000",
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    autoLogin: {
      email: 'kaungminkhant.official@gmail.com',
      password: '111111',
      prefillOnly: true,
    }
  },
  editor: lexicalEditor({}),
  collections: [Users, Media, Pages, BlogPosts, PageTemplates],
  globals: [Header, Footer, RecentBlogPosts],
  cors: ["*"],
  cookiePrefix: "bitch",
  defaultDepth: 1,
  maxDepth: 3,
  indexSortableFields: true,
  // routes: {
  //   admin: "/hey"
  // },
  debug: true,
  telemetry: true,
  // i18n: {
  //   // debug: true,
  // },
  // localization: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  //   fallback: true,
  // },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
    // connectOptions: {
    //   auth: {
    //     password:"root",
    //     username: "root"
    //   }
    // }
  }),
})
