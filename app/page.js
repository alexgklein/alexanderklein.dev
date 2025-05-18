"use client";
import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Purpose from './sections/Purpose';

export default function Home() {
  return (
    <>
      <Hero />
      <Purpose />
    </>
  );
}
