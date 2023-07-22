'use client'
import { HandleClientContext } from '@/context/HandleClientContext'
import { RegisterHelper } from '@/helpers'
import React, { useContext, useState } from 'react'

export const RegisterForm = () => {

    const [onFocusUsername, setOnFocusUsername] = useState(false)
    const [onFocusPassword, setOnFocusPassword] = useState(false)
    const [onFocusEmail, setOnFocusEmail] = useState(false)
    const { inputs, setInputs } = RegisterHelper();
    const { handleRegister, isLogin } = useContext(HandleClientContext);

    return (
        <div
            className="flex flex-col bg-white justify-center items-center p-10 rounded-xl border-solid border-2 border-black  shadow-xl "
        >
            <h1
                className="text-2xl font-bold mb-4 text-gray-700"
            >
                Register
            </h1>

            <div
                className="flex items-center justify-center flex-col"
            >
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    value={inputs.email}
                    onFocus={() => setOnFocusEmail(true)}
                    onBlur={() => setOnFocusEmail(false)}
                    className={`outline form-control mb-2 w-80 p-2 rounded-md text-white border-solid border-2 border-gray-800 ${onFocusEmail || inputs.username.length > 1 ? 'bg-black' : 'bg-white'} transition-all duration-200 ease-in-out`}
                />
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                    value={inputs.username}
                    onFocus={() => setOnFocusUsername(true)}
                    onBlur={() => setOnFocusUsername(false)}
                    className={`outline form-control mb-2 w-80 p-2 rounded-md text-white border-solid border-2 border-gray-800 ${onFocusUsername || inputs.username.length > 1 ? 'bg-black' : 'bg-white'} transition-all duration-200 ease-in-out`}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    value={inputs.password}
                    onFocus={() => setOnFocusPassword(true)}
                    onBlur={() => setOnFocusPassword(false)}
                    className={`outline form-control mb-2 w-80 p-2 rounded-md text-white border-solid border-2 border-gray-800 ${onFocusPassword || inputs.password.length > 1 ? 'bg-black' : 'bg-white'} transition-all duration-200 ease-in-out`}
                />
                <button
                    className="btn btn-primary bg-slate-700 w-80 p-2 rounded-md hover:bg-slate-800 trasition-all duration-200 ease-in-out"
                    onClick={() => handleRegister(inputs.email, inputs.username, inputs.password)}
                >
                    Register
                </button>
            </div>
        </div>
    )
}
