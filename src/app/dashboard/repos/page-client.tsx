"use client"
import { RepositoryHeader } from '@/components/repositories/Header'
import { RepostoryList } from '@/components/repositories/RepostoryList'
import React, { FC } from 'react'
import { Repository } from './page'

interface Props {
  data: Repository[]
}

export const Repositories:FC<Props> = ({ data }) => {
  return (
    <div>
      <RepositoryHeader total={data.length} />
      <RepostoryList data={data} />
    </div>
  )
}
