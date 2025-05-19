"use client";
import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Purpose from './sections/Purpose';
import Work from './sections/Work';
export default function Home() {
  return (
    <>
      <Hero />
      <Purpose />
      <Work />
    </>
  );
}
