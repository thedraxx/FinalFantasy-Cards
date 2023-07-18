'use client'
import React, { useState } from 'react'

export const LoginHelper = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })


  return {
    inputs,
    setInputs,
  }
}
