import { Navbar } from '@/Components/Navbar'
import React from 'react'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className='h-full w-full'>
                {children}
            </div>
        </>
    )
}
