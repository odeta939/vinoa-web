import { defineField, defineType } from 'sanity';
import { GiWineBottle } from 'react-icons/gi';

export default defineType({
  name: 'wine',
  title: 'Wine',
  type: 'document',
  icon: GiWineBottle,
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Wine',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tag',
      title: 'Wine type',
      type: 'reference',
      to: [{ type: 'tag' }],
    }),
    defineField({
      name: 'dateOfTasting',
      title: 'Tasted at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'country',
      title: 'Country of Origin',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Region of Origin',
      type: 'string',
    }),
    defineField({
      name: 'smell',
      title: 'Smell of Wine',
      type: 'string',
    }),
    defineField({
      name: 'taste',
      title: 'Taste of Wine',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body of Wine',
      type: 'string',
    }),
    defineField({
      name: 'users',
      title: 'People who tasted this wine',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'user' } }],
    }),
  ],
});
