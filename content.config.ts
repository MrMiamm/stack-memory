import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    frameworks: defineCollection({
      type: 'page',
      source: 'frameworks/*',
    }),
    languages: defineCollection({
      type: 'page',
      source: 'languages/*',
    }),
    tools: defineCollection({
      type: 'page',
      source: 'tools/*',
    })
  }
})
