import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'


const config = defineConfig({
  title: 'Wine-Tastery',
  projectId: '9thjj5x6',
  dataset: 'production',
  basePath: '/admin',

  plugins: [deskTool()],

  schema: {types: schemas}
})

export default config