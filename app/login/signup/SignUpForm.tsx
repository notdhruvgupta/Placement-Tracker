"use client";
import React from "react";
import {
  CheckCircle,
  CircleArrowRight,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [verifyMail, setverifyMail] = useState(false);

  function changeEmail(e : React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function changePassword(e : React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function changeConfirmPassword(e : React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function submit(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setverifyMail(true);
  }

  console.log(email, password);

  return (
    <form onSubmit={submit} className=" w-[80%] md:w-[30%] drop-shadow-card bg-white h-fit p-5 rounded-lg">
      <div className="items-center gap-2">
        <CircleArrowRight opacity={0.5} />
        <p className="text-2xl font-[500]">Sign Up</p>
      </div>
      <div className="space-y-3 mt-5 mb-8">
        <div>
          <p className="font-[400] text-sm pb-1">Email</p>
          <input
            onChange={changeEmail}
            value={email}
            type="email"
            className="w-full rounded-[5px] p-1 px-2 text-lg bg-gray-300/40"
          />
        </div>
        <div>
          <p className="font-[400] text-sm pb-1">Password</p>
          <input
            onChange={changePassword}
            value={password}
            type="password"
            className="w-full rounded-[5px] p-1 px-2 text-lg bg-gray-300/40"
          />
        </div>
        <div>
          <p className="font-[400] text-sm pb-1">Confirm Password</p>
          <input
            onChange={changeConfirmPassword}
            value={confirmPassword}
            type="password"
            className="w-full rounded-[5px] p-1 px-2 text-lg bg-gray-300/40"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button type="submit" className="flex-1 bg-primary-blue/80 rounded-lg text-black/70 font-semibold flex justify-center py-2">
          <p className="text-white tracking-wider">Sign Up</p>
        </button>
      </div>

      { verifyMail && 
        <div className="mt-10 flex flex-col justify-center space-y-2">
          <p className='text-center'>
            Fill the OTP sent on <span className="underline">{email}</span>
          </p>
          <button className='flex justify-center items-center gap-1 text-gray-400'>
            <RotateCcw size={18} strokeWidth={1} />
            <p>Resend</p>
          </button>
          <div className="space-x-3 flex justify-center">
            <input
              type="number"
              className="w-[50%] rounded-[5px] py-2 text-lg bg-gray-300/40 text-center"
            />
            <button className="p-2 flex items-center gap-2 rounded-md bg-green-400/40">
              <CheckCircle size={18} strokeWidth={1} />
              Verify
            </button>
          </div>
        </div>
      }
    </form>
  );
}

export default SignUpForm;
