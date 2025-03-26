import React, { useState } from 'react';
import Profile from './Profile';
import { Navigate, useNavigate } from 'react-router-dom'
function Register() {
    const [focus, setFocus] = useState({});
    const navigate = useNavigate()
    const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
    const handleBlur = (field, value) =>
        setFocus((prev) => ({ ...prev, [field]: value.trim() !== "" }));

    return (
        <div className="h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold w-[60%] text-3xl">
                    Create your PopX Account
                </h2>
                <form action="" className="flex flex-col gap-3 my-5">
                    {/* Input Fields */}
                    {[
                        { id: 'name', label: 'Full Name', type: 'text' },
                        { id: 'number', label: 'Phone Number', type: 'number' },
                        { id: 'email', label: 'Email Address', type: 'email' },
                        { id: 'password', label: 'Password', type: 'password' },
                        { id: 'company', label: 'Company Name', type: 'text' }
                    ].map(({ id, label, type }) => (
                        <div key={id} className="relative my-2">
                            <label
                                htmlFor={id}
                                className={`absolute left-3 bg-gray-100 px-1 text-sm text-purple-600 transition-all duration-300 ${focus[id] ? 'text-xs -translate-y-1' : 'translate-y-2'
                                    }`}
                            >
                                {label}
                            </label>
                            <input
                                id={id}
                                onFocus={() => handleFocus(id)}
                                onBlur={(e) => handleBlur(id, e.target.value)}
                                placeholder=""
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                type={type}
                            />
                        </div>
                    ))}

                    {/* Radio Buttons */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-purple-600">
                            Are you an Agency?
                        </label>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <label htmlFor="yes">Yes</label>
                                <input id="yes" type="radio" name="agency" />
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="no">No</label>
                                <input id="no" type="radio" name="agency" />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/profile')}
                        className="bg-[#7B3FF6] my-3 w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
