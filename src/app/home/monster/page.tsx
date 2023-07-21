import { CardsMonsters } from '@/components/cards'
import { GetMonster } from '@/interface/iGetMonster'
import React from 'react'


const getMonsters = async (): Promise<GetMonster[]> => {
    const getCharacter = await fetch('https://www.moogleapi.com/api/v1/monsters')
    const getCharacterJson = await getCharacter.json()
    return getCharacterJson
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