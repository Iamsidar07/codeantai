"use client"
import React, { useState } from 'react'
import { Logo } from './Logo'
import { BarsIcon, CloseIcon } from '@/svgs'
import OrganizationSwitcher from './sidebar/OrganizationSwitcher'
import { SidebarItem, SidebarItemProps } from './sidebar/SidebarItem'
import { BookIcon, CloudIcon, CodeIcon, GearIcon, HomeIcon, PhoneIcon, SignOutIcon } from '@/svgs'

export const LINKS: SidebarItemProps[] = [
    {
        href: "/dashboard",
        title: "Repositories",
        icon: <HomeIcon />,
        isActive: true
    },
    {
        title: "AI Code Reviews",
        icon: <CodeIcon />
    },
    {
        title: "Cloud Security",
        icon: <CloudIcon />
    },
    {
        title: "How to Use",
        icon: <BookIcon />
    },
    {
        title: "Settings",
        icon: <GearIcon />
    },
    {
        title: "Support",
        icon: <PhoneIcon />
    },
    {
        title: "Logout",
        icon: <SignOutIcon />
    },
]



export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className={`fixed lg:hidden top-0 inset-x-0 z-50 ${isOpen ? "bg-black/20 bottom-0" : ""}`}>
            <div className="max-w-7xl mx-auto bg-white">
                <div className={`flex items-center justify-between mx-auto p-4 ${isOpen ? "" : "border-b"}`}>
                    <Logo />
                    <div onClick={() => setIsOpen(prev => !prev)} className="cursor-pointer">
                        {isOpen ? <CloseIcon /> : <BarsIcon />}
                    </div>
                </div>
            </div>
            {/*Mobile Navigation*/}
            <div className={`absolute left-0 right-0 bg-white backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden mx-auto lg:hidden p-4 ${isOpen ? "block" : "hidden"}`}>
                <OrganizationSwitcher />
                <ul className="mt-2">
                    {LINKS.map((link, i) => <SidebarItem key={i} {...link} />)}
                </ul>
            </div>
        </header>)
}
