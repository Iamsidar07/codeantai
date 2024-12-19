import { Repository } from '@/app/dashboard/repos/page'
import { DatabaseIcon } from '@/svgs'
import { formatDistance } from 'date-fns'
import Link from 'next/link'
import React, { FC } from 'react'


const formatDate = (date: Date) => formatDistance(date, new Date(), { addSuffix: true })
export const RepositoryCard: FC<Repository> = ({ name, visibility, language, size, updatedAt, url }) => {
  return (
    <Link href={url} target='_blank' rel="noreferrer" >
    <div className='cursor-pointer py-4 lg:py-6 border-b bg-white hover:bg-muted transition-colors duration-200'>
      <div className='px-6 flex flex-col gap-3'>
        <div className='flex items-center gap-2'>

          <h3 className='font-medium text-lg lg:text-xl'>{name} </h3>
          <p className='text-sm text-primary-foreground rounded-full border border-blue px-3.5 py-1 capitalize'>{visibility}</p>
        </div>
        <div className='flex items-center gap-10 text-base'>
          <div className='flex items-center gap-2'>

            <p>{language} </p>
            <div className='w-2 h-2 bg-primary rounded-full' />
          </div>
          <div className='flex items-center gap-2'>
            <DatabaseIcon className="aspect-square" />
            <p className='text-nowrap'>{size} KB</p>
          </div>
          <p>Updated {formatDate(new Date(updatedAt))}</p>
        </div>

      </div>

    </div>
</Link>
  )
}
