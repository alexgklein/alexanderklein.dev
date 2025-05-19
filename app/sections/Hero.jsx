import { useState, useEffect } from 'react';

const Hero = () => {
    const words = ["the gator", "the engineer", "the barber", "the berg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            {/* Hero Section */}
            <div className="h-screen flex flex-col items-center justify-start pt-28 bg-[#279CFB] p-8">      
                <div className="space-y-2 w-full">
                {/* Alexander (Top) Line */}
                <div className="grid grid-cols-5 h-1/2">
                    <div className="col-span-5 sm:col-span-4">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        zoomAndPan="magnify" 
                        preserveAspectRatio="xMidYMid meet" 
                        version="1.0" 
                        viewBox="4.22 313.52 919.6 130.38"
                        className="w-full text-white"
                    >
                        <defs>
                        <g />
                        </defs>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(11.270592, 443.882047)">
                            <g>
                            <path d="M 115.375 0 L 82.09375 0 L 82.09375 -18.84375 L 44.390625 -18.84375 L 32.9375 0 L -7.046875 0 L 82.4375 -130.359375 L 115.375 -130.359375 Z M 82.09375 -45.265625 L 82.09375 -81.390625 L 81.734375 -81.390625 L 60.25 -45.265625 Z M 82.09375 -45.265625 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(121.113324, 443.882047)">
                            <g>
                            <path d="M 84.5625 0 L 12.6875 0 L 12.6875 -130.359375 L 45.984375 -130.359375 L 45.984375 -29.234375 L 84.5625 -29.234375 Z M 84.5625 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(200.300694, 443.882047)">
                            <g>
                            <path d="M 84.203125 0 L 11.796875 0 L 11.796875 -130.359375 L 84.203125 -130.359375 L 84.203125 -101.109375 L 43.6875 -101.109375 L 43.6875 -80.859375 L 82.96875 -80.859375 L 82.96875 -51.609375 L 43.6875 -51.609375 L 43.6875 -29.234375 L 84.203125 -29.234375 Z M 84.203125 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(286.707647, 443.882047)">
                            <g>
                            <path d="M 131.765625 0 L 94.0625 0 L 65.875 -46.15625 L 39.109375 0 L 1.9375 0 L 47.5625 -69.40625 L 7.21875 -130.359375 L 44.921875 -130.359375 L 67.296875 -93.1875 L 88.953125 -130.359375 L 126.484375 -130.359375 L 86.671875 -68.703125 Z M 131.765625 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(387.800113, 443.898338)">
                            <g>
                            <path d="M 115.28125 0 L 82.015625 0 L 82.015625 -18.828125 L 44.359375 -18.828125 L 32.90625 0 L -7.046875 0 L 82.375 -130.234375 L 115.28125 -130.234375 Z M 82.015625 -45.234375 L 82.015625 -81.3125 L 81.65625 -81.3125 L 60.1875 -45.234375 Z M 82.015625 -45.234375 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(498.869266, 443.882047)">
                            <g>
                            <path d="M 121.71875 0 L 92.828125 0 L 43.15625 -79.265625 L 42.8125 -79.09375 L 43.6875 0 L 11.796875 0 L 11.796875 -130.359375 L 40.515625 -130.359375 L 90.890625 -48.4375 L 91.25 -48.796875 L 89.84375 -130.359375 L 121.71875 -130.359375 Z M 121.71875 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(617.597982, 443.882047)">
                            <g>
                            <path d="M 122.78125 -65.53125 C 122.78125 -44.15625 116.9375 -27.890625 105.25 -16.734375 C 93.5625 -5.578125 77.035156 0 55.671875 0 L 10.046875 0 L 10.046875 -130.359375 L 53.203125 -130.359375 C 61.066406 -130.359375 68.429688 -129.738281 75.296875 -128.5 C 82.171875 -127.269531 88.570312 -124.921875 94.5 -121.453125 C 100.4375 -117.992188 105.867188 -112.859375 110.796875 -106.046875 C 115.023438 -100.171875 118.078125 -93.769531 119.953125 -86.84375 C 121.835938 -79.914062 122.78125 -72.8125 122.78125 -65.53125 Z M 89.484375 -65 C 89.484375 -71.925781 88.367188 -78.117188 86.140625 -83.578125 C 83.910156 -89.046875 80.472656 -93.332031 75.828125 -96.4375 C 71.191406 -99.550781 65.175781 -101.109375 57.78125 -101.109375 L 43.328125 -101.109375 L 43.328125 -29.234375 L 57.609375 -29.234375 C 68.992188 -29.234375 77.148438 -32.550781 82.078125 -39.1875 C 87.015625 -45.820312 89.484375 -54.425781 89.484375 -65 Z M 89.484375 -65 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(733.332053, 443.882047)">
                            <g>
                            <path d="M 84.203125 0 L 11.796875 0 L 11.796875 -130.359375 L 84.203125 -130.359375 L 84.203125 -101.109375 L 43.6875 -101.109375 L 43.6875 -80.859375 L 82.96875 -80.859375 L 82.96875 -51.609375 L 43.6875 -51.609375 L 43.6875 -29.234375 L 84.203125 -29.234375 Z M 84.203125 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(811.606909, 443.882047)">
                            <g>
                            <path d="M 112.21875 0 L 74.15625 0 L 44.046875 -42.09375 L 43.6875 -42.09375 L 43.6875 0 L 11.796875 0 L 11.796875 -130.359375 L 53.015625 -130.359375 C 57.597656 -130.359375 62.265625 -130.207031 67.015625 -129.90625 C 71.773438 -129.613281 76.382812 -128.820312 80.84375 -127.53125 C 85.3125 -126.238281 89.425781 -124.066406 93.1875 -121.015625 C 98.59375 -116.671875 102.613281 -111.359375 105.25 -105.078125 C 107.894531 -98.796875 109.21875 -92.25 109.21875 -85.4375 C 109.21875 -78.738281 107.953125 -72.484375 105.421875 -66.671875 C 102.898438 -60.859375 99.234375 -55.984375 94.421875 -52.046875 C 89.609375 -48.117188 83.734375 -45.566406 76.796875 -44.390625 Z M 77.328125 -83.5 C 77.328125 -89.957031 75.179688 -94.503906 70.890625 -97.140625 C 66.609375 -99.785156 61.59375 -101.109375 55.84375 -101.109375 L 43.6875 -101.109375 L 43.6875 -64.828125 L 55.484375 -64.828125 C 61.710938 -64.828125 66.910156 -66.265625 71.078125 -69.140625 C 75.242188 -72.015625 77.328125 -76.800781 77.328125 -83.5 Z M 77.328125 -83.5 " />
                            </g>
                        </g>
                        </g>
                    </svg>
                    </div>
                    <div>
                    
                    </div>
                </div>
                {/* Klein (Bottom) Line */}
                <div className="grid grid-cols-5 h-3/5"> 
                    <div className="col-span-2 sm:col-span-3">
                    {/* <div className="h-full pl-18 grid grid-cols-5 items-center">
                        <p className="text-5xl font-bold text-right mr-3">"</p>
                        <p className="col-span-3 text-5xl font-bold text-center uppercase tracking-tighter">
                        {words[currentIndex]}
                        </p>
                        <p className="text-5xl font-bold text-left ml-3">"</p>
                    </div> */}
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        zoomAndPan="magnify" 
                        preserveAspectRatio="xMidYMid meet" 
                        version="1.0" 
                        viewBox="11.19 16.31 418.83 130.36"
                        className="pl-16 w-full text-white"
                    >
                        <defs>
                        <g />
                        </defs>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(-4.139824, 146.666321)">
                            <g>
                            <path d="M 123.484375 0 L 84.5625 0 L 48.96875 -56.375 L 48.625 -56.375 L 48.625 0 L 15.328125 0 L 15.328125 -130.359375 L 48.625 -130.359375 L 48.625 -71.703125 L 48.96875 -71.703125 L 85.78125 -130.359375 L 120.671875 -130.359375 L 77.515625 -65.359375 Z M 123.484375 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(112.122953, 146.666321)">
                            <g>
                            <path d="M 84.5625 0 L 12.6875 0 L 12.6875 -130.359375 L 45.984375 -130.359375 L 45.984375 -29.234375 L 84.5625 -29.234375 Z M 84.5625 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(190.394821, 146.666321)">
                            <g>
                            <path d="M 84.203125 0 L 11.796875 0 L 11.796875 -130.359375 L 84.203125 -130.359375 L 84.203125 -101.109375 L 43.6875 -101.109375 L 43.6875 -80.859375 L 82.96875 -80.859375 L 82.96875 -51.609375 L 43.6875 -51.609375 L 43.6875 -29.234375 L 84.203125 -29.234375 Z M 84.203125 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(269.167521, 146.650032)">
                            <g>
                            <path d="M 45.0625 0 L 11.796875 0 L 11.796875 -130.234375 L 45.0625 -130.234375 Z M 45.0625 0 " />
                            </g>
                        </g>
                        </g>
                        <g fill="currentcolor" fillOpacity="1">
                        <g transform="translate(308.412987, 146.650032)">
                            <g>
                            <path d="M 121.609375 0 L 92.75 0 L 43.125 -79.203125 L 42.765625 -79.03125 L 43.640625 0 L 11.796875 0 L 11.796875 -130.234375 L 40.484375 -130.234375 L 90.8125 -48.40625 L 91.171875 -48.75 L 89.765625 -130.234375 L 121.609375 -130.234375 Z M 121.609375 0 " />
                            </g>
                        </g>
                        </g>
                    </svg>
                    </div>
                </div>
                </div>
                {/* Bottom Left Text */}
                <div className="absolute bottom-0 left-0 p-8 text-white uppercase">
                    <div className="grid grid-rows-3">
                    <div className="text-xl sm:text-3xl font-bold tracking-tighter">forever learning</div>
                    <div className="text-xl sm:text-3xl font-bold tracking-tighter">helping people achieve goals</div>
                    <div className="text-xl sm:text-3xl font-bold tracking-tighter">& having fun along the way</div>
                    </div>
                </div>
                {/* Bottom Right Text */}
                <div className="absolute bottom-0 right-0 p-8 text-white uppercase">
                    <div className="flex flex-col gap-2">
                    <a href="mailto:alexandergeorgeklein@gmail.com" className="text-md font-bold tracking-tighter text-right flex items-center justify-end gap-1 group">
                        <span className='transition-all duration-300 group-hover:mr-1'>email</span>
                        <svg className="w-4 h-4 transform transition-transform group-hover:rotate-45 duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 19l14-14m0 0H9m10 0v10" />
                        </svg>
                    </a>
                    <a href="https://github.com/alexgklein" className="text-md font-bold tracking-tighter text-right flex items-center justify-end gap-1 group">
                        <span className='transition-all duration-300 group-hover:mr-1'>github</span>
                        <svg className="w-4 h-4 transform transition-transform group-hover:rotate-45 duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 19l14-14m0 0H9m10 0v10" />
                        </svg>
                    </a>
                    <a href="http://www.linkedin.com/in/klein-alex/" className="text-md font-bold tracking-tighter text-right flex items-center justify-end gap-1 group">
                        <span className='transition-all duration-300 group-hover:mr-1'>linkedin</span>
                        <svg className="w-4 h-4 transform transition-transform group-hover:rotate-45 duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 19l14-14m0 0H9m10 0v10" />
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;