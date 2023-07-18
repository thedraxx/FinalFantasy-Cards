import { RegisterForm } from '@/components/registerForm'
import React from 'react'

const page = () => {
    return (
        <div
            className='bg-gradient-to-l from-sky-400 to-blue-500 flex flex-1 flex-col w-100 h-screen justify-center items-center'
        >
            <RegisterForm />
            <a href='/' className='text-white text-center mt-4'>
                {` have an account? Login here.`}
            </a>
        </div>
    )
}

export default page