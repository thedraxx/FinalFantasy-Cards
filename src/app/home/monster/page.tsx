import finalFantasyAPI from '@/api/finalFantasyAPI'
import { CardsMonsters } from '@/components/cards'
import { GetMonster } from '@/interface/iGetMonster'
import React from 'react'

const getMonsters = async (): Promise<GetMonster[]> => {
    const getCharacter = await finalFantasyAPI.get('/monsters')
    return getCharacter.data
}

const monsterPage = async () => {

    const getMonstersGames = await getMonsters()

    return (
        <div className='bg-gradient-to-l from-sky-400 to-blue-500 flex flex-1 justify-center items-center'>
            <CardsMonsters
                props={getMonstersGames}
            />
        </div>
    )
}

export default monsterPage