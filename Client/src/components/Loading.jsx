import React from 'react'
import { useAppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Loading = () => {
    const { navigate } = useAppContext();
    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const nextUrl = query.get('next');
    const [verified, setVerified] = useState(false);
    useEffect(() => {
        if (nextUrl) {
            setTimeout(() => {
                setVerified(true);
                setTimeout(() => {
                    navigate(`/${nextUrl}`);
                }, 1000)
            }, 4000);
        }
    }, [nextUrl]);

    return (
        (verified ? <div className='flex justify-center items-center h-[80vh]'><img className='w-24 h-24 rounded-full' src="/RightTick.jpg" alt="Right Tick" /></div>
            : <div className='flex justify-center items-center h-screen'>
                <div className='animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary'>
                </div>
            </div>
        )
    )
}

export default Loading;