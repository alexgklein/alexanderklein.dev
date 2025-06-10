import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-300">
            <div className='grid grid-cols-1 md:grid-cols-3 p-8'>
                <div className='col-span-1 order-3 md:order-1'>
                    <div className='mt-12 sm:mt-0 flex flex-col items-center justify-center md:w-3/5 space-y-4'>
                        <div>
                            <img src="/assets/lucky.webp" alt="Rock On" className='' />
                        </div>
                            <svg 
                                version="1.0" 
                                preserveAspectRatio="xMidYMid meet" 
                                viewBox="16.62 65.23 337.6 221.05"
                                zoomAndPan="magnify" 
                                xmlnsXlink="http://www.w3.org/1999/xlink" 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-full"
                            >
                                <defs>
                                <g />
                                </defs>
                                <g fill="currentcolor" fillOpacity="1">
                                <g transform="translate(28.57111, 286.272614)">
                                    <g>
                                    <path d="M 195.65625 0 L 139.203125 0 L 139.203125 -31.96875 L 75.265625 -31.96875 L 55.859375 0 L -11.953125 0 L 139.796875 -221.046875 L 195.65625 -221.046875 Z M 139.203125 -76.765625 L 139.203125 -138 L 138.59375 -138 L 102.15625 -76.765625 Z M 139.203125 -76.765625 " />
                                    </g>
                                </g>
                                </g>
                                <g fill="currentcolor" fillOpacity="1">
                                <g transform="translate(144.832056, 286.272614)">
                                    <g>
                                    <path d="M 209.390625 0 L 143.375 0 L 83.046875 -95.578125 L 82.4375 -95.578125 L 82.4375 0 L 25.984375 0 L 25.984375 -221.046875 L 82.4375 -221.046875 L 82.4375 -121.578125 L 83.046875 -121.578125 L 145.46875 -221.046875 L 204.609375 -221.046875 L 131.421875 -110.8125 Z M 209.390625 0 " />
                                    </g>
                                </g>
                                </g>
                            </svg>
                    </div>
                </div>
                <div className='col-span-1 order-1 md:order-2'>
                    <div className='flex flex-col items-start justify-start space-y-4'>
                        <p className='text-md font-medium uppercase'>
                            (Navigation)
                        </p>
                        <nav>
                            <ul className="text-5xl font-medium tracking-tight space-y-4">
                                <li><a href="/" className="">Home</a></li>
                                <li><a href="/about" className="">About</a></li>
                                {/* <li><a href="/projects" className="">Projects</a></li> */}
                                <li><a href="/resume" className="">Resume</a></li>
                            </ul>
                        </nav>
                        <p className='mt-8 text-md font-medium uppercase'>
                            (Platforms)
                        </p>
                        <nav>
                            <ul className="text-lg font-medium space-y-4">
                                <li><a href="mailto:alexandergeorgeklein@gmail.com" className="">Email</a></li>
                                <li><a href="http://www.linkedin.com/in/klein-alex/" className="">LinkedIn</a></li>
                                <li><a href="https://github.com/alexgklein" className="">GitHub</a></li>
                                <li><a href="https://www.instagram.com/alexgklein/" className="">Instagram</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='mt-12 sm:mt-0 col-span-1 w-5/6 order-2 md:order-3'>
                    <div className='flex flex-col items-start justify-start space-y-4'>
                        <p className='text-md font-medium uppercase'>
                            (Acknowledgement)
                        </p>
                        <p className='text-lg font-medium'>
                            I am forever grateful for the support
                            in all that I do, from my mother, father,
                            and those who closely surround me. You are the
                            reason I am able to do what I love. Thank you
                            for your unwavering optimism and support.
                            <br />
                            <br />
                            To you who has at least read this far,
                            thank you.
                        </p>
                        <p className='mt-8 text-md font-medium uppercase'>
                            (Info)
                        </p>
                        <p className='text-lg font-medium'>
                            If you have any questions, please feel free to
                            reach out to me at <a href="mailto:klein.a@ufl.edu">klein.a@ufl.edu</a>
                            &nbsp;
                            or connect with me on <a href="https://www.linkedin.com/in/klein-alex/">LinkedIn</a>.
                            <br />
                            <br />
                            This site is still a work in progress,
                            so please excuse the mess.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-3 items-start uppercase font-medium border-t border-gray-300">
                    <div className="col-span-1">
                        © 2025 kleinworld
                    </div>
                    <div className="col-span-1">
                        forever learning
                    </div>
                    <div className="col-span-1 flex flex-row items-center justify-between">
                        <p>Thank You &</p>
                        <p>Have A Lucky Day!</p>
                    </div>
            </div>    
        </footer>
    );
};

export default Footer;