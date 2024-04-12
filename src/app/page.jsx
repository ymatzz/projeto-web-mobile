'use client'
import React from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import Carroussel from '@/components/Carroussel';
import { Container, CarrosselContainer, ContentCarrosselContainer } from "./style";

export default function Home() {
  const images = [
    "teste.png",
    "teste.png",
    "teste.png",
  ]

  return (
    <Container className='corpoPadrao'>
        <Header text="Homepage" />
        <CarrosselContainer>
            <Carroussel images={images} slideWidth="73%" slideHeight="50%" />
        </CarrosselContainer>
    </Container>
  );
}
