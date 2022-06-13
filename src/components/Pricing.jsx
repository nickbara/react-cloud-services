import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Best price on the market*</h3>
          <p className='text-3xl'>
          Run your apps on modern hardware that delivers the fast performance your customers demand.
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Simple or bursty applications such as low traffic web servers, blogs, discussion forums, CMS, small databases, dev/test servers, microservices, and repository hosting.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />99.99% uptime</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'o  />Cloud firewalls</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Monitoring & alerting</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />100GB of bandwith</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Normal support</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Premium is ideal for in-memory databases and server-side caches for web apps, workloads that require a large number of transactions. Unlimited bandwith.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />99.99% uptime</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'o  />Cloud firewalls</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Monitoring & alerting</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Unlimited Bandwith</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Priority support</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;