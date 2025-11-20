import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    frameworks: defineCollection({
      type: 'page',
      source: 'frameworks/*',
      schema: z.object({
        desciprition: z.string(),
        imgSrc: z.string()
      })
    }),
    languages: defineCollection({
      type: 'page',
      source: 'languages/*',
      schema: z.object({
        desciprition: z.string(),
        imgSrc: z.string()
      })
    }),
    tools: defineCollection({
      type: 'page',
      source: 'tools/*',
      schema: z.object({
        desciprition: z.string(),
        imgSrc: z.string()
      })
    })
  }
})
