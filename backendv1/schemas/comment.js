import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [    
        defineField({
                name: 'postedby',
                title: 'PostedBy',
                type: 'postedby',
            }
        ),
        defineField({
                name: 'comment',
                title: 'Comment',
                type: 'string',
            }
        )
    ]
})