import React from 'react';

function About() {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by top companies worldwide</h2>
                <p className='text-3xl py-6 tect-gray-500'>Powerful servers with 128-bit encryption</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>100%</p>
                <p className='text-gray-400 mt-2'>Uptime</p>
            </div>

            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-400 mt-2'>Support</p>
            </div>

            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>128-bit</p>
                <p className='text-gray-400 mt-2'>Encryption</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About;
