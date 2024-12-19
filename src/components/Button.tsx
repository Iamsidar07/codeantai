import React, { FC, ReactNode } from 'react'
interface ButtonProps {
    label: string
    icon?: ReactNode
    onClick?: () => void
    variant?: 'primary' | 'outline'
    className?: string
}

export const Button: FC<ButtonProps> = ({ label, icon, onClick, variant="outline", className }) => {
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    return (
        <button onClick={handleClick} className={`flex items-center justify-center shadow-active-sidebar border px-3.5 py-2.5 rounded-lg gap-2 ${variant==='outline' ? "text-secondary": "border-gradient bg-primary text-white"} text-sm font-normal ${className}`}>
            {icon && icon}
            <span >{label}</span>
        </button>
    )
}
