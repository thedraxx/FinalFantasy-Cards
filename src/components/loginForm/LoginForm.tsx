'use client'
import { LoginHelper } from '@/helpers'
import React, { useState } from 'react'

export const LoginForm = () => {

    const [onFocusUsername, setOnFocusUsername] = useState(false)
    const [onFocusPassword, setOnFocusPassword] = useState(false)
    const { inputs, setInputs } = LoginHelper();

    return (
        <div
            className="flex flex-col bg-white justify-center items-center p-10 rounded-xl border-solid border-2 border-black  shadow-xl "
        >
            <h1
                className="text-2xl font-bold mb-4 text-gray-700"
            >
                Sign in
            </h1>

            <div
                className="flex items-center justify-center flex-col"
            >
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
                >
                    Login
                </button>
            </div>
        </div>
    )
}
