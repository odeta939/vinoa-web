import {defineType, defineField} from 'sanity'
import {BiCommentAdd} from 'react-icons/Bi'
export default defineType({
  name: 'rating',
  title: 'Wine Rating',
  type: 'document',
  icon: BiCommentAdd,
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
    defineField({
      name: 'wine',
      title: 'Wine',
      type: 'reference',
      to: {type: 'wine'}
    }),
  ]
})