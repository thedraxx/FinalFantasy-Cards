import finalFantasyAPI from "@/api/finalFantasyAPI"

interface Props {
    props: string
}


const onSearch = (props: Props) => {

    const getGames = finalFantasyAPI.get(`/api/v1/games`)

    console.log(getGames)

    return (
        <div>onSubmit</div>
    )
}


export const onSubmit = async (props: Props) => {

    return await onSearch(props)
}
