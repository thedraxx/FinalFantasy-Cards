
import { createContext } from 'react';

export interface HandleClientProps {
    isLogin: boolean;

    // Methods
    handleLogout: () => void;
    handleLogin: (email: string, passwordHash: string) => void;
    handleRegister: (email: string, name: string, passwordHash: string) => void;
}

export const HandleClientContext = createContext({} as HandleClientProps);