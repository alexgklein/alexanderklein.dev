import React from 'react';

const Work = () => {
  return (
    <section className='p-8'>
        {/* Header */}
        <div className="hidden md:grid grid-cols-12 grid-rows-2 gap-4">
            <div className="col-span-12 row-span-1 flex items-center">
                <p className="w-full text-8xl uppercase  font-medium">
                    Experiences
                </p>
            </div>
            <div className="col-span-12 grid grid-cols-12 row-span-1">
                <div className="col-span-2"/>
                <div className="col-span-6 flex items-center">
                    <p className="w-full text-8xl uppercase  font-medium">
                        & Milestones
                    </p>
                </div>
                <div className="col-span-4 flex items-center">
                    <p className="w-full text-8xl text-right uppercase  font-medium">
                        (2025)
                    </p>
                </div>
            </div>
        </div>
        <div className="md:hidden grid grid-rows-2 gap-4">
            <div className="row-span-1 flex items-center">
                <p className="w-full text-5xl uppercase  font-medium">
                    Experiences & 
                </p>
            </div>
            <div className="row-span-1">
                <div className="flex items-center justify-between">
                    <p className="w-full text-5xl uppercase  font-medium">
                        Milestones
                    </p>
                </div>
            </div>
            <p className="w-full text-3xl text-right uppercase  font-medium">
                (2025)
            </p>
        </div>
        {/* Collections */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 space-y-8 sm:space-y-24 '>
            <div className='col-span-1 w-5/6 sm:w-full h-full'>
                <div className=''>
                        <img src="/assets/sanfran.webp" alt="Akima" className='object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-medium flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p className='hidden sm:block'>Solutions Engineer Intern</p>
                        <p className='block sm:hidden'>Intern</p>
                        <p className='ml-3 sm:ml-6'>@</p>
                        <p className='ml-3 sm:ml-6'>Deloitte</p>
                    </div>
                    <div className='text-right'>
                        Summer 2025
                    </div>
                </div>
            </div>
            <div className='col-span-1 w-5/6 justify-self-end sm:justify-self-center sm:w-full h-full'>
                <div className=''>
                    <img src="/assets/akima.webp" alt="Akima" className='object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-medium flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p className='hidden sm:block'>Software Engineer Intern</p>
                        <p className='block sm:hidden'>Intern</p>
                        <p className='ml-3 sm:ml-6'>@</p>
                        <p className='ml-3 sm:ml-6'>Akima</p>
                    </div>
                    <div className='text-right'>
                        Summer 2024
                    </div>
                </div>
            </div>
            <div className='col-span-1 w-5/6 sm:w-full h-full'>
                <div className=''>
                    <img src="/assets/acmcrew.webp" alt="ACM Crew" className='object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-medium flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p>President</p>
                        <p className='ml-6'>@</p>
                        <p className='ml-6'>ACM</p>
                    </div>
                    <div className='text-right'>
                        2023 — 2025
                    </div>
                </div>
            </div>

            <div className='col-span-1 w-5/6 justify-self-end sm:justify-self-center sm:w-full h-full'>
                <div className=''>
                    <img src="/assets/valedictorian.webp" alt="Valedictorian" className='object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-medium flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p>Valedictorian</p>
                        <p className='ml-6'>@</p>
                        <p className='ml-6'>J.P. Taravella</p>
                    </div>
                    <div className='text-right'>
                        2022
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default Work; 