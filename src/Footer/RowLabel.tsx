'use client'
import { Header } from '@/payload-types'
import { useRowLabel } from '@payloadcms/ui'

export const RowLabel: any = (props) => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  const label = null

  return <div>{label}</div>
}