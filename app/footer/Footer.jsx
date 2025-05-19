import React from 'react';

const Footer = () => {
    return (
        <footer className="text-sm pt-40 p-8 mt-48 font-bold">
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