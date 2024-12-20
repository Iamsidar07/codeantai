"use client"
import React, { useState } from 'react';
import { ChevronDownIcon } from '@/svgs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Organization {
    id: string;
    name: string;
}

// Sample projects data
const organizations: Organization[] = [
    { id: '1', name: 'iamsidar07', },
    { id: '2', name: 'tjdevries', },
    { id: '3', name: 'adrianhajdin', },
];

export const OrganizationSwitcher = () => {
    const params = useSearchParams()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrganization, setSelectedOrganization] = useState<Organization>(organizations.find(project => project.name === params.get('username')) || organizations[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOrganizationChange = (project: Organization) => {
        setSelectedOrganization(project);
        setIsOpen(false);
        const searchParams = new URLSearchParams(params.toString());
        searchParams.set('username', project.name);
        router.push(`/dashboard/repos?${searchParams.toString()}`);
    }

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between px-3 py-2 bg-white border rounded-lg shadow-xs hover:bg-gray-50 transition-colors duration-200"
            >
                <div className="font-normal text-base text-left truncate w-[80%]">{selectedOrganization.name}</div>
                <ChevronDownIcon
                    className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
                    <ul className="py-1">
                        {organizations.map((organization) => (
                            <li key={organization.id}>
                                <button
                                    className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors duration-200 ${selectedOrganization.id === organization.id ? 'bg-primary hover:bg-primary-foreground text-white rounded-lg gradient-border' : ''
                                        }`}
                                    onClick={() => handleOrganizationChange(organization)}
                                >
                                    <p>{organization.name}</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default OrganizationSwitcher;