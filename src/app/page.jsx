'use client'
import React from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import Carroussel from '@/components/Carroussel';

export default function Home() {
  const images = [
    "bomba.jpg",
    "breakingbad.jpg",
    "trembo.jpg",
  ]

  return (
    <>
      <header>
        <Header text="Homepage" />
      </header>
      <section>
        <main>
          <Carroussel images={images} slideWidth="50%" slideHeight="300px" />
        </main>
      </section>
    </>
  );
}
