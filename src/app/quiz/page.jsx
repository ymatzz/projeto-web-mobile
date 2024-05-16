'use client'
import React from "react";
import Header from "@/components/Header";
import { Container, TextContainer, ImageContainer, ButtonContainer } from "./style";
import Card from "@/components/Card";
import Link from 'next/link';

export default function Quiz() {
    return (
        <Container className="corpoPadrao">
            <TextContainer>
                <span>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Quem num gosta di mim que vai caçá sua turmis!</span>
            </TextContainer>
            <ImageContainer>
                <img src="quizimg.png" />
            </ImageContainer>
            <ButtonContainer>
                <Link href="/perguntas">
                    Iniciar quiz
                </Link>
            </ButtonContainer>
        </Container>

    )
}