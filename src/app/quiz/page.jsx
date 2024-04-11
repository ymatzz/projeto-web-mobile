'use client'
import React from "react";
import Header from "@/components/Header";
import { Container, TextContainer, ImageContainer, ButtonContainer } from "./style";
import Card from "@/components/Card";

export default function Quiz() {
    return (
        <Container>
            <Header text="Quiz" />
            <TextContainer>
                <span>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Quem num gosta di mim que vai caçá sua turmis!</span>
            </TextContainer>
            <ImageContainer>
                <img src="quizimg.png" />
            </ImageContainer>
            <ButtonContainer>
                <button>Iniciar quiz</button>
            </ButtonContainer>
        </Container>
    )
}