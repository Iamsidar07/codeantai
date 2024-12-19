"use client"
import { RepositoryHeader } from '@/components/repositories/Header'
import { RepostoryList } from '@/components/repositories/RepostoryList'
import React, { FC, Suspense } from 'react'
import { Repository } from './page'

interface Props {
  data: Repository[]
}

export const Repositories:FC<Props> = ({ data }) => {
  return (
    <div>
      <Suspense>
      <RepositoryHeader total={data.length} />
      </Suspense>
      <RepostoryList data={data} />
    </div>
  )
}
