import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'
import { visionTool } from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'


const config = defineConfig({
  title: 'Wine-Tastery',
  projectId: '9thjj5x6',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: '2023-09-15', // use a UTC date string

  plugins: [deskTool(), visionTool(), unsplashImageAsset()],

  schema: {types: schemas}
})

export default config