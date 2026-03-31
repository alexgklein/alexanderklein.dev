"use client";
import React, { useEffect } from 'react';

const Purpose = () => {
    useEffect(() => {
        // Zoom photos (same pattern as Work.jsx)
        const photos = document.querySelectorAll('.zoom-photo-purpose');
        const photoObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        photoObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        photos.forEach(el => photoObserver.observe(el));

        // Slide-up lines
        const lines = document.querySelectorAll('.purpose-line');
        const lineObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const line = entry.target.querySelector('.purpose-line');
                        if (line) line.classList.add('visible');
                        lineObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        lines.forEach(el => {
            if (el.parentElement) {
                lineObserver.observe(el.parentElement);
            }
        });

        return () => {
            photoObserver.disconnect();
            lineObserver.disconnect();
        };
    }, []);

    return (
        <>
            <section className='hidden lg:block p-8 grid-cols-12 grid-rows-3 gap-24'>
                {/* Row 1 */}
                <div className="col-span-12 row-span-1 grid grid-cols-12 gap-4">
                    <div className="col-span-8 flex items-center">
                        <div className="w-full">
                            <div className="overflow-hidden w-max pb-2 pr-6 -mr-6">
                                <p className="purpose-line purpose-line-1 w-full text-9xl uppercase font-medium tracking-tight">
                                    Chasing
                                </p>
                            </div>
                            <div className="overflow-hidden w-max pb-2 pr-6 -mr-6">
                                <p className="purpose-line purpose-line-2 w-full text-9xl uppercase font-medium tracking-tight">
                                    A Better Life
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4" />
                </div>
                {/* Row 2 */}
                <div className="col-span-12 row-span-1 grid grid-cols-12">
                    <div className="col-span-4"></div>
                    <div className="col-span-3 flex items-center mb-0.5">
                        <div className="zoom-photo zoom-photo-purpose overflow-hidden">
                            <img src="/assets/pooool.webp" alt="Pool" className="object-contain h-[220px]" />
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="overflow-hidden w-max pb-2 pr-6 -mr-6">
                            <p className="purpose-line purpose-line-3 text-9xl text-left uppercase font-medium tracking-tight">
                                Each &
                            </p>
                        </div>
                        <div className="overflow-hidden w-max pb-2 pr-6 -mr-6">
                            <p className="purpose-line purpose-line-4 text-9xl text-left uppercase font-medium tracking-tight">
                                Everyday
                            </p>
                        </div>
                    </div>
                </div>
                {/* Row 3 */}
                <div className="col-span-12 row-span-1 grid grid-cols-12">
                    <div className="col-span-4" />
                    <div className="col-span-3">
                        <p className="text-lg text-left font-medium w-full text-wrap">

                        </p>
                    </div>
                    <div className="col-span-5">
                        <div className="overflow-hidden">
                            <p className="purpose-line purpose-line-5 text-sm text-right uppercase leading-none font-medium w-full">
                                (My Purpose)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mobile */}
            <section className='lg:hidden p-8 space-y-4'>
                {/* Row 1 */}
                <div className="col-span-12 grid grid-cols-12">
                    <div className="col-span-12 flex flex-col items-center space-y-4">
                        <div className="w-full">
                            <div className="overflow-hidden w-full pb-2 px-4 -mx-4">
                                <p className="purpose-line purpose-line-1 w-full text-5xl md:text-7xl uppercase font-medium">
                                    Chasing
                                </p>
                            </div>
                            <div className="overflow-hidden w-full pb-2 px-4 -mx-4">
                                <p className="purpose-line purpose-line-2 w-full text-5xl md:text-7xl uppercase font-medium">
                                    Better Life
                                </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="overflow-hidden w-full pb-2 px-4 -mx-4">
                                <p className="purpose-line purpose-line-3 w-full text-right text-5xl md:text-7xl uppercase font-medium">
                                    Each &
                                </p>
                            </div>
                            <div className="overflow-hidden w-full pb-2 px-4 -mx-4">
                                <p className="purpose-line purpose-line-4 w-full text-right text-5xl md:text-7xl uppercase font-medium">
                                    Everyday
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="col-span-12 grid grid-cols-12">
                    <div className="col-span-12 flex items-center">
                        <div className="zoom-photo zoom-photo-purpose overflow-hidden w-full">
                            <img src="/assets/pool.png" alt="Pool" className="object-contain h-full w-full" />
                        </div>
                    </div>
                </div>
                {/* Row 3
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
            </div> */}
            </section>
        </>

    );
};

export default Purpose;
 