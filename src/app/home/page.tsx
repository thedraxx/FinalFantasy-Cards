import { Navbar } from '@/components/Navbar'
import { Cards } from '@/components/cards'
import { Footer } from '@/components/footer'
import React from 'react'

const homePage = () => {
    return (
        <>
            <Navbar />
            <div
                className='bg-gradient-to-l from-sky-400 to-blue-500 flex flex-1 flex-col w-100 h-screen justify-center items-center'
            >
                <Cards />
            </div>

            <Footer />
        </>

    )
}

export default homePage