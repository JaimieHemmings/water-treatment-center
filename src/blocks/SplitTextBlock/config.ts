import type { Block } from 'payload'

export const SplitTextBlock: Block = {
  imageURL: '/block-images/splittext-block.jpg',
  slug: 'splitTextBlock',
  interfaceName: 'splitTextBlock',
  fields: [
    {
      name: 'items',
      label: 'Items',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          label: 'Text',
          type: 'richText',
          required: true,
        },
        {
          name: 'lType',
          label: 'Link Type',
          type: 'select',
          options: [
            {
              label: 'CMS Page',
              value: 'cms',
            },
            {
              label: 'Supporting Document',
              value: 'supporting',
            },
          ],
          defaultValue: 'cms',
        },
        {
          name: 'CMSLink',
          label: 'CMS Link',
          type: 'relationship',
          relationTo: 'pages',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.lType === 'cms'
            },
          },
        },
        {
          name: 'supportingDocsLink',
          label: 'Link to Supporting Document',
          type: 'relationship',
          relationTo: 'supporting-documents',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.lType === 'supporting'
            },
          },
          hooks: {
            afterRead: [
              async ({ value, req }) => {
                if (!value) return value;
                const doc = await req.payload.findByID({
                  collection: 'supporting-documents',
                  id: value,
                  depth: 1
                });
                return {
                  ...doc,
                  ...value,
                  // @ts-ignore
                  pageAssociation: doc.association?.slug
                };
              }
            ]
          }
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        }
      ]
    }
  ],
  labels: {
    plural: 'Split Text Blocks',
    singular: 'Split Text Block',
  },
}