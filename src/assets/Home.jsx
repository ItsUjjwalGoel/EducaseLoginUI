import React from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50'>
            <div className='w-full h-lvh max-w-md p-6 bg-white rounded-lg shadow-md'>
                <div className='h-3/5'>
                </div>

                <div className='text-center mt-6'>
                    <h1 className='text-3xl font-semibold'>Welcome to Popx</h1>
                    <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className='mt-6 space-y-4'>
                    <button 
                        className='w-full bg-[#7B3FF6] hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer'
                        onClick={() => navigate('/register')}
                    >
                        Create Account
                    </button>

                    <button 
                        className='w-full bg-[#D0A8FF] hover:bg-[#ac70f0] text-black font-semibold py-3 rounded-lg cursor-pointer'
                        onClick={() => navigate('/login')}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;