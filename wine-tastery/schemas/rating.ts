import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'rating',
  title: 'Wine Rating',
  type: 'document',
  fields: [
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'string'
    }),
  ]
})