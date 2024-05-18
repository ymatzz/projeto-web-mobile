'use client'
import React from "react";
import { Container, TextContainer, ImageContainer, ButtonContainer } from "./style";
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
                <Link style={{textDecoration: "none"}} href="/quiz/perguntas">
                    <button>Iniciar quiz</button>
                </Link>
            </ButtonContainer>
        </Container>
    )
}