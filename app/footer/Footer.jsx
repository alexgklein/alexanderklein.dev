import React from 'react';

const Footer = () => {
    return (
        <footer className="text-sm pt-40">
            {/* Contacts */}
            <div className="grid grid-cols-12 gap-2 items-start mb-4">
                <div className="col-span-5 text-right lg:col-start-7 lg:col-span-1 xl:col-start-8">
                contact
                </div>
                <div className="col-span-6 lg:col-span-1">
                <a href="#" className="email" >
                    email
                </a>
                <br />
                <a href="https://www.linkedin.com/in/klein-alex/">
                    linkedin
                </a>
                <br />
                <a href="https://github.com/a1exanderklein" className="email" >
                    github
                </a>
                </div>
            </div>

            {/* Pages */}
            <div className="grid grid-cols-12 gap-2 items-start mb-4">
                <div className="col-span-5 text-right lg:col-start-7 lg:col-span-1 xl:col-start-8">
                pages
                </div>
                <div className="col-span-6 lg:col-span-1">
                <a href="/about" className="email" >
                    about
                </a>
                <br />
                <a href="/experience" className="email" >
                    experience
                </a>
                <br />
                <a href="/school" className="email" >
                    school
                </a>
                <br />
                <a href="/gratitude" className="email" >
                    gratitude
                </a>
                <br />

                </div>
            </div>

            {/* <div className="grid grid-cols-12 gap-2 items-start mb-4">
                <div className="col-span-5 text-right lg:col-start-6 lg:col-span-2 xl:col-start-7">
                acknowledgements
                </div>
                <div className="col-span-6 lg:col-span-3">
                mom, dad, and my family made up of friends
                </div>
                <div className="col-span-5 text-right lg:col-start-7 lg:col-span-1 xl:col-start-8">
                and
                </div>
                <div className="col-span-6 lg:col-span-2">
                    all those who have helped me along the way
                </div>
            </div> */}

            {/* Row 4 – Colophon */}
            <div className="grid grid-cols-12 gap-2 items-start">
                <div className="col-span-5 text-right lg:col-span-1 lg:text-left">
                kleinworld®
                </div>
                <div className="col-span-6 lg:col-start-3 lg:col-span-3 xl:col-start-4 lg:text-right">
                forever learning
                </div>
                <div className="col-span-5 text-right lg:col-span-2">
                ©2025
                </div>
                <div className="col-span-6 lg:col-span-3">
                all rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;