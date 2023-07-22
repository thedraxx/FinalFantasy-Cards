import { HandleClientState } from "./HandleClientProvider"


type HandleClientActionType = 
    | {type: '[HandleClient] - loginClient'}
    | {type: '[HandleClient] - registerClient'}
    | {type: '[HandleClient] - logoutClient'}


export const HandleClientReducer = (state:HandleClientState, action:HandleClientActionType): HandleClientState => {
    switch (action.type) {
        case '[HandleClient] - loginClient':

           return {
                ...state,
                isLogin: true,
            }

        case '[HandleClient] - registerClient':
            return{
                ...state,
                isLogin: true,
            }

        case '[HandleClient] - logoutClient':
            return{
                ...state,
            }

        default:
            return state;
    }
}