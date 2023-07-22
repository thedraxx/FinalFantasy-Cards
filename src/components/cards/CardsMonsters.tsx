'use client'
import { GetMonster } from '@/interface/iGetMonster'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
interface Props {
    props: GetMonster[]
}

export const CardsMonsters = ({ props }: Props) => {

    const itemsPerPage = 4; // Número de elementos por página
    const [pageNumber, setPageNumber] = useState(1);
    const [paginatedData, setPaginatedData] = useState<GetMonster[]>([]);

    useEffect(() => {
        // Calcula el índice inicial y final para la página actual
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Obtiene los datos para la página actual
        const currentPageData = props.slice(startIndex, endIndex);

        setPaginatedData(currentPageData);
    }, [props, pageNumber]);


    return (
        <div className='flex flex-col w-auto items-center justify-center mb-5 sm:h-auto md:h-screen'>
            <div className='flex flex-wrap justify-center gap-5 mb-10 px-5 md:px-10'>
                {
                    paginatedData.map((item, index) => (
                        <div
                            className="group h-96 w-80 [perspective:1000px] mt-5"
                            key={index}
                        >
                            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0 ">
                                    <div className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40">
                                        <Image
                                            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                                            src={item.picture}
                                            alt="character name"
                                            layout="fill"
                                        />
                                    </div>

                                    <div
                                        className="absolute bottom-0 z-40 inset0 w-full h-24 rounded-b-xl bg-white/90 px-2 text-center text-black [transform:rotateY(0deg)] [backface-visibility:hidden]">
                                        <h1
                                            className="text-lg font-bold text-black/90 hover:text-black/80 transition-all duration-500 text-left"
                                        >
                                            {item.name}
                                        </h1>
                                        <h2
                                            className='text-sm text-black/70 hover:text-black/80 transition-all duration-500 text-left'
                                        >
                                            {item.japaneseName}
                                        </h2>
                                        <p
                                            className="text-xs text-black/80 hover:text-black/80 transition-all duration-500 text-left"
                                        >
                                            {
                                                item.description ?
                                                    item.description.length > 100
                                                        ? item.description.substring(0, 100) + '...'
                                                        : item.description
                                                    : item.game
                                            }
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <div className="flex min-h-full flex-col items-center justify-center">
                                        <h1 className="text-3xl font-bold">{item.name}</h1>
                                        <p className="text-lg">{
                                            item.japaneseName ?
                                                item.japaneseName
                                                : item.game
                                        }</p>
                                        <p className="text-base">{
                                            item.description ?
                                                item.description.length > 100
                                                    ? item.description.substring(0, 100) + '...'
                                                    : item.description
                                                : item.elementalWeakness
                                        }.</p>
                                        <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="grid col-span-3 grid-cols-3 gap-2 justify-center mt-5 items-center ">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                    disabled={pageNumber === 1}
                >
                    <FaArrowLeft />
                </button>
                <span className="text-center text-gray-800">Page {pageNumber}</span>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => setPageNumber((prev) => Math.min(prev + 1, Math.ceil(props.length / itemsPerPage)))}
                    disabled={pageNumber === Math.ceil(props.length / itemsPerPage)}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}
