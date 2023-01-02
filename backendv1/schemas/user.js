import {defineField, defineType} from 'sanity'

export default defineType({
        name: 'user',
        title: 'User',
        type: 'document',
        fields: [
            defineField(
                {
                    name: 'user',
                    title: 'User',
                    type: 'string'
                }
            ),
            defineField(
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ),
            defineField(
                {
                    name: 'password',
                    title: 'Password',
                    type: 'string',
                }
            )
        ]
    }
)