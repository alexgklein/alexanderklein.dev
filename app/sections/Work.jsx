import React from 'react';

const Work = () => {
  return (
    <section className='p-8'>
        {/* Header */}
        <div className="grid grid-cols-12 grid-rows-2 gap-4">
            <div className="col-span-12 row-span-1 flex items-center">
                <p className="w-full text-8xl uppercase font-avant-book font-bold">
                    Experiences
                </p>
            </div>
            <div className="col-span-12 grid grid-cols-12 row-span-1">
                <div className="col-span-2"/>
                <div className="col-span-6 flex items-center">
                    <p className="w-full text-8xl uppercase font-avant-book font-bold">
                        & Milestones
                    </p>
                </div>
                <div className="col-span-4 flex items-center">
                    <p className="w-full text-8xl text-right uppercase font-avant-book font-bold">
                        (2025)
                    </p>
                </div>
            </div>
        </div>
        {/* Collections */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 space-y-24'>
            <div className='col-span-1'>
                <div className=''>
                        <img src="/assets/sanfran.webp" alt="Akima" className='w-full h-full object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-bold flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p>Solutions Engineer Intern</p>
                        <p className='ml-6 font-bold'>@</p>
                        <p className='ml-6 font-bold'>Deloitte</p>
                    </div>
                    <div className='text-right font-bold'>
                        Summer 2025
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <div className=''>
                    <img src="/assets/akima.webp" alt="Akima" className='w-full h-full object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-bold flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p>Solutions Engineer Intern</p>
                        <p className='ml-6 font-bold'>@</p>
                        <p className='ml-6 font-bold'>Akima</p>
                    </div>
                    <div className='text-right font-bold'>
                        Summer 2024
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <div className=''>
                    <img src="/assets/acmcrew.webp" alt="ACM Crew" className='w-full h-full object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-bold flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p>President</p>
                        <p className='ml-6 font-bold'>@</p>
                        <p className='ml-6 font-bold'>ACM</p>
                    </div>
                    <div className='text-right font-bold'>
                        2023 — 2025
                    </div>
                </div>
            </div>

            <div className='col-span-1'>
                <div className=''>
                    <img src="/assets/valedictorian.webp" alt="Valedictorian" className='w-full h-full object-cover'/>
                </div>
                <div className='mt-2 text-sm uppercase font-bold flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <p>Valedictorian</p>
                        <p className='ml-6 font-bold'>@</p>
                        <p className='ml-6 font-bold'>J.P. Taravella</p>
                    </div>
                    <div className='text-right font-bold'>
                        2022
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default Work; 