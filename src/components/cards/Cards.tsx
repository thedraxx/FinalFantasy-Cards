'use client'
import Image from 'next/image'
import React from 'react'

export const Cards = () => {
    return (
        <div className='grid grid-cols-3 gap-5 items-center justify-center w-auto h-auto bg-white p-20 rounded-xl shadow-xl shadow-black/40'>
            <div className="group h-96 w-80 [perspective:1000px] mt-5">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 ">
                        <Image
                            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                            src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
                            alt=""
                            layout="fill"
                        />
                        <div
                            className="absolute bottom-0 z-40 inset0 w-full h-24 rounded-b-xl bg-white/90 px-2 text-center text-black [transform:rotateY(0deg)] [backface-visibility:hidden]">
                            <h1
                                className="text-lg font-bold text-black/90 hover:text-black/80 transition-all duration-500 text-left"
                            >
                                Title
                            </h1>
                            <h2
                                className='text-sm text-black/70 hover:text-black/80 transition-all duration-500 text-left'
                            >
                                By subtitle
                            </h2>
                            <p
                                className="text-xs text-black/80 hover:text-black/80 transition-all duration-500 text-left"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </p>

                        </div>
                    </div>

                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">Jane Doe</h1>
                            <p className="text-lg">Photographer & Art</p>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
