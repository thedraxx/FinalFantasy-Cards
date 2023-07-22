"use client";
import { useReducer } from 'react';
import { HandleClientReducer } from './handleClientReducer';
import { HandleClientContext } from './HandleClientContext';
import handleClientAPI from '@/api/api';


export interface HandleClientState {
    isLogin: boolean;
}

const HandleClient_INITIAL_STATE: HandleClientState = {
    isLogin: false,
};

interface Props {
    children: React.ReactNode;
}

export const HandleClientProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(HandleClientReducer, HandleClient_INITIAL_STATE)

    const handleLogin = async (email: string, passwordHash: string) => {

        try {
            await handleClientAPI.post('/login', {
                email,
                passwordHash
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch({
                type: '[HandleClient] - loginClient',
            })

        } catch (error) {
            console.log(error)
            return;
        }

    }

    const handleRegister = async (email: string, name: string, passwordHash: string) => {

        try {
            await handleClientAPI.post('/register', {
                email,
                name,
                passwordHash
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            dispatch({
                type: '[HandleClient] - registerClient',
            })

        } catch (error) {
            console.log(error)
            return;
        }
    }

    const handleLogout = () => { }


    return (
        <HandleClientContext.Provider value={{
            ...state,
            handleLogin,
            handleLogout,
            handleRegister
        }}>
            {children}
        </HandleClientContext.Provider>
    )
}