'use client'
import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

export const Navbar = () => {

    const [inputText, setinputText] = useState('')
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <>
            <div
                className={`flex flex-row justify-center items-center w-full h-16 bg-gradient-to-r from-sky-100 to-white ${openSearch ? "hidden" : "opacity-100 visible"} transition-opacity duration-500`}>
                <form
                    className='flex flex-row justify-center items-center w-full h-16'
                    onSubmit={(e) => {
                        e.preventDefault()
                        console.log(inputText)
                    }}
                >

                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="rounded-md border-2 border-gray-300 p-2 w-96 h-10 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent"
                        value={inputText}
                        onChange={(e) => setinputText(e.target.value)}
                    />

                </form>
            </div>
            <div className='flex flex-row justify-center items-center w-full h-16 bg-gradient-to-l from-sky-400 to-blue-500'>
                <div className="group h-auto w-auto justify-center items-center ">
                    <h2 className='text-2xl font-bold text-gray-800 hover:text-gray-600 transition-all duration-500'>
                        <button onClick={() => setOpenSearch(!openSearch)}>
                            {openSearch ? <FaArrowDown className='transition-all hover:rotate-180' color='white' /> : <FaArrowUp className='transition-all hover:rotate-180' color='white' />}
                        </button>
                    </h2>
                </div>
            </div>
        </>
    )
}
