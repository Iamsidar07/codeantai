import React, { Suspense } from 'react'
import { SidebarItem, SidebarItemProps } from './SidebarItem'
import { Logo } from '../Logo'
import { ProjectSwitcher } from './ProjectSwitcher'
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
]

export const Sidebar = () => {

  return (
    <div className="hidden fixed top-0 bottom-0 lg:flex flex-col justify-between w-[242px] h-[100vh] bg-white border-r min-h-sv">
      {/* top sidebar */}
      <div className='flex-1 pt-6 flex flex-col gap-4'>
        {/* header */}
        <div className='px-5 flex flex-col gap-5'>
          <Logo />
          <Suspense>
            <ProjectSwitcher />
          </Suspense>
        </div>
        <div className='px-4'>
          {
            LINKS.map((link, i) => <SidebarItem key={i} {...link} />)
          }
        </div>


      </div>
      {/* bottom sidebar */}
      <div>
        <SidebarItem href='/dashboard/#' title='Support' icon={<PhoneIcon />} />
        <SidebarItem href='/dashboard/#' title='Logout' icon={<SignOutIcon />} />
      </div>

    </div>
  )
}
