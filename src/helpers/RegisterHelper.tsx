'use client'
import React, { useState } from 'react'

export const RegisterHelper = () => {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    })


    return {
        inputs,
        setInputs,
    }
}
