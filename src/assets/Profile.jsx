import img from './home.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const navigate = useNavigate();
    return (
        <div className="h-[100vh] max-w-[400px] relative  mx-auto bg-gray-100">
            <div className="header flex justify-between  px-5 pt-5 pb-2 bg-white items-center ">
                <h2 className="font-bold text-xl">Account Settings</h2>
                <button className="cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <img src={img} width='25px ' alt="" />
                </button>
            </div>
            <div className="info flex flex-col px-5  gap-3 my-5">
                <div className="flex gap-3">
                    <div className="h-20 w-20 rounded-full bg-gray-200 relative">
                        <div className="h-7 w-7 flex items-center justify-center rounded-full text-white bg-[#7B3FF6] absolute right-0 -bottom-0">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="info flex px-5 py-5 flex-col ">
                        <h3 className="font-semibold text-lg">Marry Doe
                        </h3>
                        <span className="text-gray-600 font-semibold hover:underline cursor-pointer">
                            Marry@gmail.com
                        </span>
                    </div>
                </div>
                <p className="text-gray-600  font-semibold pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores numquam, voluptas omnis voluptate voluptates ipsum dolor sit.</p>
            </div>
        </div>
    )
}

export default Profile