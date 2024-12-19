"use client"
import React, { useState } from 'react';
import { ChevronDownIcon } from '@/svgs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Project {
    id: string;
    name: string;
}

// Sample projects data
const projects: Project[] = [
    { id: '1', name: 'iamsidar07', },
    { id: '2', name: 'tjdevries', },
    { id: '3', name: 'adrianhajdin', },
];

export const ProjectSwitcher = () => {
    const params = useSearchParams()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project>(projects.find(project => project.name === params.get('username')) || projects[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleProjectChange = (project: Project) => {
        setSelectedProject(project);
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
                <div className="font-normal text-base text-left truncate w-[80%]">{selectedProject.name}</div>
                <ChevronDownIcon
                    className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
                    <ul className="py-1">
                        {projects.map((project) => (
                            <li key={project.id}>
                                <button
                                    className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors duration-200 ${selectedProject.id === project.id ? 'bg-primary hover:bg-primary-foreground text-white rounded-lg gradient-border' : ''
                                        }`}
                                    onClick={() => handleProjectChange(project)}
                                >
                                    <p>{project.name}</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProjectSwitcher;