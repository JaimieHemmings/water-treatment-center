import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Site Navigation',
          fields: [
            {
              name: 'siteNavigation',
              type: 'array',
              fields: [
                {
                  name: 'link',
                  type: 'relationship',
                  relationTo: 'pages',
                  hasMany: false,
                  required: true,
                },
              ],
              maxRows: 6,
              admin: {
                initCollapsed: true,
                description: 'Main navigation links in the footer'
              }
            },
          ]
        },
        {
          label: 'Company Information',
          fields: [
            {
              name: 'blurb',
              label: 'Company Blurb',
              type: 'textarea',
              required: true,
            }
          ]
        },
        {
          label: 'Useful Links',
          fields: [
            {
              name: 'usefulLinks',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
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
              ],
              maxRows: 6,
              admin: {
                initCollapsed: true,
                description: 'Secondary links section in the footer'
              }
            },
          ]
        }
      ]
    }
  ],
  admin: {
    group: 'Globals',
  },
  hooks: {
    afterChange: [revalidateFooter],
  },
}