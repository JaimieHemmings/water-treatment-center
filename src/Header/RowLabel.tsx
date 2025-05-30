'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = (props) => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  const label = null

  return <div>{label}</div>
}
