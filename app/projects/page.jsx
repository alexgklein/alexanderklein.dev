"use client";
import React from 'react';

export default function Projects() {
  return (
    <main className="min-h-screen p-8 pt-12">
      {/* Horizontal Scroll Layout */}
      <div className="flex overflow-x-auto gap-8 py-8 pb-4">
        {/* Project Cards */}
        <div className="flex-none w-[calc(100vw-4rem)] md:w-[calc((100vw-4rem)/3)] space-y-4">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
            <img 
              src="/placeholder.jpg"
              alt="Project 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="uppercase text-sm font-medium">Swamp Subleasing</div>
        </div>

        <div className="flex-none w-[calc(100vw-4rem)] md:w-[calc((100vw-4rem)/3)] space-y-4">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
            <img 
              src="/placeholder.jpg"
              alt="Project 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="uppercase text-sm font-medium">UF ACM Website</div>
        </div>

        <div className="flex-none w-[calc(100vw-4rem)] md:w-[calc((100vw-4rem)/3)] space-y-4">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
            <img 
              src="/placeholder.jpg"
              alt="Project 3" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="uppercase text-sm font-medium">File System Daemon</div>
        </div>

        <div className="flex-none w-[calc(100vw-4rem)] md:w-[calc((100vw-4rem)/3)] space-y-4">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
            <img 
              src="/placeholder.jpg"
              alt="Project 3" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="uppercase text-sm font-medium">Chess Data Analyzer</div>
        </div>
      </div>
      {/* Header */}
      <div className="">
        <h1 className="text-8xl font-bold tracking-tight uppercase">Projects</h1>
      </div>
    </main>
  );
}
