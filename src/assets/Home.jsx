import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Register from './Register';
import Login from './Login';
function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='w-lvw h-lvh flex justify-center'>
                <div className=''></div>
                <div className='w-[400px] bg-gray-100'>
                    <div className='h-4/6'></div>
                    <div className=''>
                        <div className='pl-5 font-semibold text-3xl' >Welcome to Popx</div>
                        <div className='pl-6 pt-1 w-[75%] text-gray-400 font-semibold '>Lorem, ipsum dolor sit amet,
                            consectetur adipisicing elit.</div>
                        <button className='w-full'
                            onClick={() => { navigate('/register') }}> <div className='mt-2 ml-2 mr-2  bg-[#7B3FF6] hover:bg-[#5b15e8] text-white font-semibold text-center py-3 rounded-lg cursor-pointer'> Create Account</div></button>
                        <button className='w-full'
                            onClick={() => { navigate('/login') }}> <div className='mt-2 ml-2 mr-2 bg-[#D0A8FF] hover:bg-[#ac70f0] font-semibold text-center py-3 rounded-lg cursor-pointer'> Already Registered?Login</div></button>
                    </div>

                </div>
                <div className=''></div>
            </div>
        </>)
}

export default Home