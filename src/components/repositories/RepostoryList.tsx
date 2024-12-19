import React, { FC } from 'react'
import { RepositoryCard } from './RepositoryCard'
import { Repository } from '@/app/dashboard/repos/page'

interface Props {
    data: Repository[]
}

export const RepostoryList: FC<Props> = ({ data }) => {
    return (
        <>
            {data.map((repo, i) => <RepositoryCard key={i} {...repo} />)}
        </>
    )
}
