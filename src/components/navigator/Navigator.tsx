import React from 'react'
import Link from 'next/link'

export const Navigator = () => {

    return (
        <div
            className='bg-gradient-to-l from-sky-400 to-blue-500 flex flex-1 flex-col w-100  justify-center items-center'
        >
            <ul
                className='flex flex-row justify-center items-center w-full h-16 bg-gradient-to-l from-sky-400 to-blue-500'
            >
                <li
                    className='text-xl font-bold text-black hover:text-gray-300 transition-all duration-500 mr-5 cursor-pointer'
                >
                    <Link
                        href='/home'
                        className='p-2 bg-white rounded-lg '
                    >
                        Character
                    </Link>
                </li>

                <li
                    className='text-xl font-bold text-black hover:text-gray-300 transition-all duration-500 mr-5 cursor-pointer'
                >
                    <Link
                        href='/home/game'
                        className='p-2 bg-white rounded-lg '
                    >
                        Game
                    </Link>
                </li>

                <li
                    className='text-xl font-bold text-black hover:text-gray-300 transition-all duration-500 mr-5 cursor-pointer'
                >
                    <Link
                        href='/home/monster'
                        className='p-2 bg-white rounded-lg '
                    >
                        Monster
                    </Link>
                </li>
            </ul>
        </div>
    )
}
