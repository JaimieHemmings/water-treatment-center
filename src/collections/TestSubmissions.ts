import type { CollectionConfig } from 'payload'
import { v4 as uuidv4 } from 'uuid'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const TestSubmissions: CollectionConfig = {
  slug: 'test-submissions',
  access: {
    create: anyone,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['uuid', 'name', 'email', 'createdAt'],
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Only set UUID if it's a new document
        if (!data.uuid) {
          data.uuid = uuidv4()
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'uuid',
      type: 'text',
      admin: {
        readOnly: true,
      },
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
    },
  ],
  timestamps: true,
}

export default TestSubmissions