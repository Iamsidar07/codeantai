"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import Tabs from '@/components/Tabs';
import { Button } from '@/components/Button';
import { AzureIcon, BitBucketIcon, GitHubIcon, GitLabIcon, KeyIcon } from '@/svgs';

const SAAS = [
    {
        id: 'Github',
        icon: <GitHubIcon />,
    },
    {
        id: 'Bitbucket',
        icon: <BitBucketIcon />,
    },
    {
        id: 'Azure Devops',
        icon: <AzureIcon />,
    },
    {
        id: 'Gitlab',
        icon: <GitLabIcon />,
    }
]
const SELF_HOSTED = [
    {
        id: 'Gitlab',
        icon: <GitLabIcon />,
        label: "Self Hosted GitLab"
    },
    {
        id: 'sso',
        icon: <KeyIcon />,
        label: "Sign in with SSO"
    },

]

const tabsData = [
    {
        id: 'saas',
        label: 'SAAS',
        content: <div className='py-6 flex flex-col gap-4 items-center'>
            {
                SAAS.map((saas) => (
                    <Button key={saas.id} icon={saas.icon} label={`Sign in with ${saas.id}`} className='font-bold py-4 px-[17px] w-full' onClick={() => console.log(saas.id)} />
                ))
            }


        </div>
    },
    {
        id: 'self-hosted',
        label: 'Self Hosted',
        content: <div className='py-6 flex flex-col gap-4 items-center'>
            {
                SELF_HOSTED.map((item) => (
                    <Button key={item.id} icon={item.icon} label={item.label} className='font-bold py-4 px-[17px] w-full' onClick={() => console.log(item.id)} />
                ))
            }


        </div>
    },

];
export const SignInPageClient = () => {

    return (
        <div className="min-h-screen flex">
            {/* Left Section (Statistics) */}
            <div className="hidden lg:flex lg:w-1/2 bg-white border-r border-[#E9EAEB] p-8 items-center justify-center relative">
                {/* Stats Card */}
                <Image src={"/illustration.png"} alt="illustration" width={2068} height={1480} className="object-contain max-w-lg" />
                <Image src={"/shape.png"} alt="shape" width={284} height={319} className="object-contain absolute left-0 bottom-0" />
            </div>

            {/* Right Section (Sign In) */}
            <div className="w-full lg:w-1/2 bg-muted flex flex-col items-center justify-center px-6 py-12 lg:px-16">
                <div className="w-full max-w-md border border-[#E9EAEB] rounded-lg shadow-signin-card bg-white">
                    <div className="flex flex-col items-center pt-9 pb-5 px-6 gap-5">
                        <Logo />
                        <h2 className="lg:text-[32px] font-semibold">Welcome to CodeAnt AI</h2>
                    </div>
                    <Tabs
                        tabs={tabsData}
                        defaultTab="saas"
                        onChange={(tabId) => console.log('Tab changed:', tabId)}
                        className='w-full'
                    />
                </div>
                {/* Privacy Policy */}
                <p className="text-center text-base mt-8">
                    By signing up you agree to the{' '}
                    <Link href="/#" className="font-bold">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};
