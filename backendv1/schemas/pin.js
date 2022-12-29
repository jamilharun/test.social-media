import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        defineField({
                name: 'title',
                title: 'Title',
                type: 'string',
            }
        ),
        defineField({
                name: 'about',
                title: 'About',
                type: 'string',
            }
        ),
        defineField({
                name: 'destination',
                title: 'Destination',
                type: 'string',
            }
        ),
        defineField({
                name: 'image',
                title: 'Image',
                type: 'image',
                Options: {
                    hotspot: true
                }
            },
        ),
        defineField({
            name: 'userId',
            title: 'UserId',
            type: 'string',
            }
        ),
        defineField({
            name: 'postedby',
            title: 'PostedBy',
            type: 'postedby',
        }),
        defineField({
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{ type: 'save'}]
        }),
        defineField({
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment'}]
        }),
    ]
})