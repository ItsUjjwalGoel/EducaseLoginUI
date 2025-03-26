import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

function Login() {
    const navigate = useNavigate();
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-2xl sm:text-3xl text-center">
                        Sign in to your PopX Account
                    </h2>
                    <p className="text-gray-400 font-semibold text-sm sm:text-lg text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <form action="" className="my-5">
                        {/* Email Field */}
                        <div className="relative my-4">
                            <label
                                htmlFor="email"
                                className={`absolute left-3 bg-white px-1 text-sm text-purple-600 transition-all duration-300 ${emailFocused ? 'text-xs -translate-y-1' : 'translate-y-2'}`}
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
                                className={`absolute left-3 bg-white px-1 text-sm text-purple-600 transition-all duration-300 ${passwordFocused ? 'text-xs -translate-y-1' : 'translate-y-2'}`}
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
                            onClick={() => navigate('/profile')}
                            className="bg-[#7B3FF6] w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer mt-4"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;