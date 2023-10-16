import { defineType, defineField } from 'sanity';
import { BiCommentAdd } from 'react-icons/bi';
export default defineType({
  name: 'review',
  title: 'Wine Reviews',
  type: 'document',
  icon: BiCommentAdd,
  fields: [
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'wine',
      title: 'Wine rating',
      type: 'reference',
      to: [{ type: 'wine' }],
    }),
    defineField({
      name: 'user',
      title: 'User who rated the wine',
      type: 'reference',
      to: [{ type: 'user' }],
    }),
  ],
});
