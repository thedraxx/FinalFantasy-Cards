import finalFantasyAPI from '@/api/finalFantasyAPI'
import { Cards } from '@/components/cards'
import { GetCharacter } from '@/interface/iGetCharacter'
import React from 'react'

const getCharactersGame = async (): Promise<GetCharacter[]> => {
    const getCharacter = await finalFantasyAPI.get<GetCharacter[]>('/characters')
    return getCharacter.data
}

const homePage = async () => {

    const getCharacter = await getCharactersGame()

    return (

        <div className='bg-gradient-to-l from-sky-400 to-blue-500 flex flex-1 justify-center items-center'>
            <Cards
                props={getCharacter}
            />
        </div>

    )
}

export default homePage