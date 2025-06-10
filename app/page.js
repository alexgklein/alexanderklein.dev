"use client";
import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Purpose from './sections/Purpose';
import Work from './sections/Work';
import Bio from './sections/Bio';
export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Work />
      <Purpose />
    </>
  );
}
