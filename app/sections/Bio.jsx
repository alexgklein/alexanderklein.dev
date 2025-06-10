import React from 'react';

const Bio = () => {
  return (
    <>
        <section className='p-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-36'>
            <div className='col-span-1 md:col-span-3 space-y-4'>
                <div>
                    <p className='text-md font-medium uppercase'>
                        (Bio)
                    </p>
                </div>
                <div>
                    <img src="/assets/rock.webp" alt="Alexander" />
                </div>
                <div>
                    <ul>
                        <li className='grid grid-cols-12 gap-2 text-lg font-medium py-1 border-b border-gray-300'>
                            <span className='col-span-3 tracking-tight uppercase text-gray-500'>(Name)</span>
                            <p className='col-span-9'>Alexander George Klein</p>
                        </li>
                        <li className='grid grid-cols-12 gap-2 text-lg font-medium py-1 border-b border-gray-300'>
                            <span className='col-span-3 tracking-tight uppercase text-gray-500'>(Role)</span>
                            <p className='col-span-9'>Software Engineer</p>
                        </li>
                        <li className='grid grid-cols-12 gap-2 text-lg font-medium py-1 border-b border-gray-300'>
                            <span className='col-span-3 tracking-tight uppercase text-gray-500'>(From)</span>
                            <p className='col-span-9'>Coral Springs, FL</p>
                        </li>
                        <li className='grid grid-cols-12 gap-2 text-lg font-medium py-1 border-b border-gray-300'>
                            <span className='col-span-3 tracking-tight uppercase text-gray-500'>(Year)</span>
                            <p className='col-span-9'>Class of 2026</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-span-1 md:col-span-8 space-y-4'>
                <p className='text-2xl text-justify sm:text-left md:text-5xl font-medium indent-12 tracking-tight leading-14'>
                    Alex is a Computer Science student at the University of Florida,
                    with a passion for learning, creativity, and progress. 
                </p>
                <p className='text-2xl text-justify sm:text-left md:text-5xl font-medium indent-12 tracking-tight leading-14'>
                    He is the President at UF ACM, 
                    where he empowers students to break into the tech industry. 
                    He has interned as a software engineer at Deloitte and Akima, 
                    improving national security systems.
                </p>
                <p className='text-2xl text-justify sm:text-left md:text-5xl font-medium indent-12 tracking-tight leading-14'>
                    He hopes to become a leader in technology,
                    using the power of software to make humans more efficient,
                    and inspiring others to do the same.
                </p>
            </div>
        </section>
    </>
    
  );
};

export default Bio; 