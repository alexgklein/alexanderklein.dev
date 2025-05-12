import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const StatementSection = () => {
  return (
    <section className={`h-screen grid grid-rows-3 bg-white text-black p-8 ${poppins.className}`}>
      <div className="row-span-1 grid grid-cols-12 h-full">
        <div className="col-span-8 h-full flex items-center">
          <p className="text-9xl text-left uppercase leading-none font-semibold tracking-tighter">
            Working 
            <br/>
            to help people
          </p>
        </div>
      </div>
      <div className="row-span-1 grid grid-cols-12 gap-4 h-full">
        <div className="col-span-2 h-full">

        </div>
        <div className="col-span-4 h-full">
          <img src="/assets/pool.png" alt="Pool" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-6 h-full flex items-center">
          <p className="text-9xl text-left uppercase leading-none font-semibold tracking-tighter">
            Achieve 
            <br/>
            Their Goals
          </p>
        </div>
      </div>
      <div className="row-span-1 h-full">
        
      </div>
    </section>
  );
};

export default StatementSection;