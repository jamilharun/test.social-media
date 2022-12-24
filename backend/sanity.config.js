import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'cyan-lapwing',

  projectId: 'sd5894io',
  dataset: 'cancel',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
