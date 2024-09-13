import React from 'react'
import Navbar from '../components/Navbar'
import LoginForm from './LoginForm'

function Login() {
    return (
        <div className="h-svh flex flex-col">
            <Navbar showLogin={true} />
            <div className="flex-1 m-2 flex justify-center pt-[8em] md:pt-[10em]">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login