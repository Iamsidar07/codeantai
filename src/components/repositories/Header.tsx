'use client'
import React, { ChangeEvent, FC } from 'react'
import { Button } from '../Button'
import { PlusIcon, RefreshIcon, SearchIcon } from '@/svgs'
import { debounce } from '@/lib'
import { useSearchParams, useRouter } from 'next/navigation'

interface Props {
    total: number
}

export const RepositoryHeader: FC<Props> = ({ total }) => {
    const params = useSearchParams()
    const router = useRouter()
    const [value, setValue] = React.useState(params.get('repo') || '')
    const updateSearchParams = (e: ChangeEvent<HTMLInputElement>) => {
        const searchParams = new URLSearchParams(params.toString());
        if (e.target.value === '') {
            searchParams.delete('repo');
            router.push(`/dashboard/repos?${searchParams.toString()}`);
            return;
        }
        searchParams.set('repo', e.target.value);
        router.push(`/dashboard/repos?${searchParams.toString()}`);

    }

    const debouncedUpdateSearchParams = debounce((e) => updateSearchParams(e), 300);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        debouncedUpdateSearchParams(e);
    }

    return (
        <div className='border-b border-[#E9EAEB] px-6 py-5 flex flex-col gap-5'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-semibold text-2xl'>Repositories</h2>
                    <p className='text-sm font-normal text-secondary'>{total} total repositories</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Button label='Refresh All' icon={<RefreshIcon />} className="font-normal" />
                    <Button label='Add Repository' icon={<PlusIcon />} variant='primary' className="font-normal" />
                </div>
            </div>
            <div className={"relative"}>
                <SearchIcon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                />
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={'Search repositories'}
                    className="-z-10 w-full lg:max-w-[366px] pl-10 pr-3.5 py-2.5 border rounded-lg focus:ring-[1px] focus:ring-offset-1 focus:ring-secondary/10 outline-none text-secondary text-sm shadow-active-sidebar"
                />
            </div>

        </div>
    )
}
