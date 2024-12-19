"use client"
import { useRouter } from 'next/navigation'
import React, { FC, ReactNode } from 'react'

export interface SidebarItemProps {
    href?: string
    title: string
    icon: ReactNode
    isActive?: boolean;
    onClick?: () => void;
}
export const SidebarItem: FC<SidebarItemProps> = ({ href, title, icon, isActive, onClick }) => {
    const router = useRouter()
    const handleClick = () => {
        if (href) {
            router.push(href)
        }
        if (onClick) {
            onClick()
        }
    }
    return (
        <div onClick={handleClick} className={`px-3.5 py-2.5 flex items-center gap-2 text-base font-semibold hover:opacity-90 transition-opacity cursor-pointer ${isActive ? "bg-primary text-white rounded-lg gradient-border" : "bg-white"} `}>
            {icon}
            <span className='text-base font-normal text-left truncate'>{title}</span>
        </div>
    )
}
