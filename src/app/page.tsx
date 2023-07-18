import { LoginForm } from '@/components/loginForm'
import React from 'react'

const login = () => {
  return (
    <div
      className='bg-gradient-to-l from-sky-400 to-blue-500 flex flex-1 flex-col w-100 h-screen justify-center items-center'
    >

      <LoginForm />

      <a href='/register' className='text-white text-center mt-4'>
        {`Don't have an account? Register here.`}
      </a>
    </div>
  )
}

export default login