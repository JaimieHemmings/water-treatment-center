import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="The Water Treatment Centre"
      width={300}
      height={80}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className='max-w-[250px] w-full h-auto'
      src="/logo.png"
    />
  )
}
