'use client'
import React, { useState } from 'react'

export const LoginHelper = () => {

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })


  return {
    inputs,
    setInputs,
  }
}
