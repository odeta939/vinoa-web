import {defineField, defineType} from 'sanity'
import {GiWineBottle} from 'react-icons/gi'

export default defineType({
    name: 'wine',
    title: 'Wine',
    type: 'document',
    icon:  GiWineBottle,
    fields: [
        defineField({
            name: 'name',
            title: 'Name of Wine',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'name',
                maxLength: 96,
            }
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
          name: 'dateOfTasting',
          title: 'Tasted at',
          type: 'datetime',
          validation: Rule => Rule.required()
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
            type: 'string'
        }),
        defineField({
            name: 'colour',
            title: 'Colour of Wine',
            type: 'string'
        }),
        defineField({
            name: 'wineRatings',
            title: 'Wine Ratings',
            type: 'array',
            of: [{type: 'reference', to:{type:'rating'}} ]
        })

    ]
})