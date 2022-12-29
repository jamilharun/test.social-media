import {defineField, defineType} from 'sanity'

export default defineType({
        name: 'save',
        title: 'Save',
        type: 'document',
        fields: [
            defineField({
                    name: 'postedby',
                    title: 'PostedBy',
                    type: 'postedby',
                }
            ),
            defineField({
                    name: 'userId',
                    title: 'UserId',
                    type: 'string',
                }
            )
        ]
    }
)