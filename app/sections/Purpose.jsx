import React from 'react';

const Purpose = () => {
  return (
    <>
        <section className='hidden lg:block p-8 grid-cols-12 grid-rows-3 gap-24'>
            {/* Row 1 */}
            <div className="col-span-12 row-span-1 grid grid-cols-12 gap-4">
                <div className="col-span-8 flex items-center">
                    <p className="w-full text-9xl uppercase font-medium tracking-tight">
                        Chasing 
                        <br/>
                        A Better Life
                    </p>
                </div>
                <div className="col-span-4"/>
            </div>
            {/* Row 2 */}
            <div className="col-span-12 row-span-1 grid grid-cols-12">
                <div className="col-span-4"></div>
                <div className="col-span-3 flex items-center mb-0.5">
                    <img src="/assets/pooool.webp" alt="Pool" className="object-contain h-[220px]" />
                </div>
                <div className="col-span-5">
                    <p className="text-9xl text-left uppercase font-medium tracking-tight">
                        Each & 
                        <br/>
                        Everyday
                    </p>
                </div>
            </div>
            {/* Row 3 */}
            <div className="col-span-12 row-span-1 grid grid-cols-12">
                <div className="col-span-4"/>
                <div className="col-span-3">
                    <p className="text-lg text-left font-medium w-full text-wrap">
                        
                    </p>
                </div>
                <div className="col-span-5">
                    <p className="text-sm text-right uppercase leading-none font-medium w-full">
                        (My Purpose)
                    </p>
                </div>
            </div>
        </section>
        {/* Mobile */}
        <section className='lg:hidden h-screen p-8 space-y-4'>
            {/* Row 1 */}
            <div className="col-span-12 grid grid-cols-12">
                <div className="col-span-12 flex flex-col items-center space-y-4">
                    <p className="w-full text-5xl md:text-7xl uppercase font-medium">
                        Chasing 
                        <br/>
                        Better Life                        
                    </p>
                    <p className="w-full text-right text-5xl md:text-7xl uppercase font-medium">
                        Each & 
                        <br/>
                        Everyday                        
                    </p>
                </div>
            </div>
            {/* Row 2 */}
            <div className="col-span-12 grid grid-cols-12">
                <div className="col-span-12 flex items-center">
                    <img src="/assets/pool.png" alt="Pool" className="object-contain h-full w-full" />
                </div>
            </div>
            {/* Row 3 */}
            <div className="col-span-12 grid grid-cols-12">
                <div className="col-span-12 space-y-4">
                    <p className="text-sm md:text-base text-left uppercase leading-none font-medium w-full">
                        (My Purpose)
                    </p>
                    <p className="text-sm md:text-base text-left uppercase font-medium w-full text-wrap">
                        We design spaces for people. No matter
                        the scale of the projects, our
                        down-to-earth approach stays the same.
                        We listen first, design second. We take the
                        time to understand how you live, work, and
                        move through your space.
                        <br />
                        <br />
                        Then, we bring your vision to life. Drawing
                        from real experience, we create
                        contemporary, aspirational spaces that
                        feel effortless and truly yours.
                </p>
                </div>
            </div>
        </section>
    </>
    
  );
};

export default Purpose; 