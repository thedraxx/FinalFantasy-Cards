import finalFantasyAPI from '@/api/finalFantasyAPI'
import { CardsGames } from '@/components/cards'
import { GetGames } from '@/interface/iGetGames'
import React from 'react'

const getCharactersGame = async (): Promise<GetGames[]> => {
    const getCharacter = await finalFantasyAPI.get('/games')
    return getCharacter.data
}

const gamePage = async () => {

    const getCharacterGames = await getCharactersGame()
    return (
        <div className='bg-gradient-to-l from-sky-400 to-blue-500 flex flex-1 justify-center items-center'>
            <CardsGames
                props={getCharacterGames}
            />
        </div>
    )
}

export default gamePage