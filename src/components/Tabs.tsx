"use client"
import React, { useState } from 'react';

interface Tab {
    id: string;
    label: string;
    content?: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    activeTab?: string;
    onChange?: (tabId: string) => void;
    className?: string;
}

const Tabs: React.FC<TabsProps> = ({
    tabs,
    defaultTab,
    activeTab: controlledActiveTab,
    onChange,
    className = '',
}) => {
    const [internalActiveTab, setInternalActiveTab] = useState(
        defaultTab || tabs[0]?.id
    );

    const activeTab = controlledActiveTab ?? internalActiveTab;

    const handleTabClick = (tabId: string) => {
        if (!controlledActiveTab) {
            setInternalActiveTab(tabId);
        }
        onChange?.(tabId);
    };

    return (
        <div className={className}>
            {/* Tab List */}
            <div className='px-6'>
                <div className="flex bg-muted border rounded-lg">
                    {tabs.map((tab) => (
                        <button onClick={() => handleTabClick(tab.id)} key={tab.id} className={`text-center w-full font-semibold py-4 px-[17px] shadow-active-sidebar ${activeTab === tab.id ? "bg-primary rounded-lg text-white" : ""}`}>{tab.label}</button>

                    ))}
                </div>
            </div>
            <div className='border-t mt-4 h-px w-full' />

            {/* Tab Panels */}
            <div className="mt-4 px-6">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${tab.id}`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;