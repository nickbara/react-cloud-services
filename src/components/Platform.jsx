import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const Platform = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        Build apps faster, make smarter business decisions, and connect people anywhere.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Compute</h3>
              <p className='text-lg pt-2 pb-4'>
              Create and run customizable virtual machines with Compute Engine.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Storage</h3>
              <p className='text-lg pt-2 pb-4'>
              Store any type of data, any amount of data, and retrieve daily.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Databases</h3>
              <p className='text-lg pt-2 pb-4'>
              Reduce maintenance costs with fully managed MySQL, PostgreSQL, and SQL Server databases.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Analytics</h3>
              <p className='text-lg pt-2 pb-4'>
              Ingest, process, and analyze event streams in real time to make data more useful.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>AI and Machine Learning</h3>
              <p className='text-lg pt-2 pb-4'>
              Improve customer service with Contact Center AI’s virtual agents and conversational AI products like Speech-to-Text.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Networking</h3>
              <p className='text-lg pt-2 pb-4'>
              Help protect your applications and websites against denial of service and web attacks with Cloud Armor.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Dev Tools</h3>
              <p className='text-lg pt-2 pb-4'>
              Write, debug, and run cloud-native applications, locally or in the cloud—quickly and easily with Cloud Code.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Build</h3>
              <p className='text-lg pt-2 pb-4'>
              Build and deploy your apps with the our Cloud Build service.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Platform;
