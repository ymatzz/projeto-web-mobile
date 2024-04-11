'use client'
import React from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import Carroussel from '@/components/Carroussel';
import { Container, CarrosselContainer } from "./style";

export default function Home() {
  const images = [
    "bomba.jpg",
    "breakingbad.jpg",
    "trembo.jpg",
  ]

  return (
    <Container className='corpoPadrao'>
        <Header text="Homepage" />
        <CarrosselContainer>
          <Carroussel images={images} slideWidth="50%" slideHeight="300px" />
        </CarrosselContainer>
    </Container>
  );
}
