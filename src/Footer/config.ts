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
                  name: 'link',
                  type: 'relationship',
                  relationTo: 'pages',
                  required: true,
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