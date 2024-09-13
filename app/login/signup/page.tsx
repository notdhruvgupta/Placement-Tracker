import Navbar from '@/app/components/Navbar'
import React from 'react'
import SignUpForm from './SignUpForm'


function SignUp() {
    return (
        <div className="h-svh flex flex-col">
            <Navbar showLogin={true} />
            <div className="flex-1 m-2 flex justify-center pt-[4em]">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp