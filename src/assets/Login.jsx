import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile';
function Login() {
    const navigate = useNavigate();
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <>
            <div className="h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100">

                <div className="flex flex-col gap-2">
                    <h2 className="font-bold w-[60%] text-3xl">
                        Sign in to your PopX Account
                    </h2>
                    <p className="w-[75%] text-gray-400 font-semibold text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <form action="" className="my-5">
                        {/* Email Field */}
                        <div className="relative my-4">
                            <label
                                htmlFor="email"
                                className={`absolute left-3 bg-gray-100 px-1 text-sm text-purple-600 transition-all duration-300 ${emailFocused ? 'text-xs -translate-y-1' : 'translate-y-2'
                                    }`}
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                onFocus={() => setEmailFocused(true)}
                                onBlur={(e) => setEmailFocused(e.target.value !== "")}
                                placeholder=""
                                className="mt-1 w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                type="email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative my-4">
                            <label
                                htmlFor="password"
                                className={`absolute left-3 bg-gray-100 px-1 text-sm text-purple-600 transition-all duration-300 ${passwordFocused ? 'text-xs -translate-y-1' : 'translate-y-2'
                                    }`}
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={(e) => setPasswordFocused(e.target.value !== "")}
                                placeholder=""
                                className="mt-1 w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                type="password"
                            />
                        </div>

                        <button
                        onClick={()=>navigate('/profile')} className="bg-[#7B3FF6] w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
