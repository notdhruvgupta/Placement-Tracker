"use client"
import React from "react"
import { CircleArrowRight, KeyRound } from 'lucide-react'
import { useState } from "react";
import Link from "next/link";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function changeEmail(e : React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function changePassword(e : React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    console.log(email, password);

    return (
        <div className=" w-[80%] md:w-[22%] drop-shadow-card bg-white h-fit p-5 rounded-lg">
            <div className='items-center gap-2'>
                <CircleArrowRight opacity={0.5} />
                <p className="text-2xl font-[500]">Login</p>
            </div>
            <div className='space-y-3 mt-5 mb-8'>
                <div>
                    <p className='font-[400] text-sm pb-1'>Email</p>
                    <input
                        onChange={changeEmail}
                        value={email}
                        type="email"
                        className="w-full rounded-[5px] p-1 px-2 text-lg bg-gray-300/40" />
                </div>
                <div>
                    <p className='font-[400] text-sm pb-1'>Password</p>
                    <input
                        onChange={changePassword}
                        value={password}
                        type="password"
                        className="w-full rounded-[5px] p-1 px-2 text-lg bg-gray-300/40" />
                </div>
            </div>
            <div className='flex gap-2'>
                <Link href='/login/signup' className="flex-1 bg-pastel-gray rounded-lg text-black/70 font-semibold flex justify-center py-2">
                    <p>Sign Up</p>
                </Link>
                <button className="flex-1 bg-primary-blue rounded-lg text-white font-semibold flex justify-center py-2">
                    <p>Sign In</p>
                </button>
            </div>

        </div>
    )
}

export default LoginForm