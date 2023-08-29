import {defineField, defineType} from 'sanity'
import rating from './rating'

export default defineType({
    name: 'wine',
    title: 'Wine',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name of Wine',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
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
            of: [
                defineField({
                    name: 'wineRating',
                    type: rating.type,
                })
            ]
            
        })

    ]
})