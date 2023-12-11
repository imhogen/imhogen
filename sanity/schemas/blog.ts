export default {
    name: 'blog',
    title: 'blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'overview',
        type: 'string',
        title: 'Overview',
      },
  
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
        },
      },
  
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {type: 'block'},
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative Text',
              },
            ],
          },
        ],
      },
    ],
  }
  