'use client'
import React, {useState, useEffect} from "react";
import { Container, ContentContainer, TextContainer, ImageContainer, ButtonContainer } from "./style";
import Link from 'next/link';


export default function Quiz() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const defineImagem = () => {
        return windowWidth > 600 ? 'quiz_imagem.png' : 'quizimg.png';
    }

    return (
        <Container className="corpoPadrao">
            <ContentContainer>
                <TextContainer>
                    <span>Realize o quiz abaixo e saiba o quanto você conhece sobre a prevenção ao uso de drogas licitas e ilicitas, e quais os males que elas podem acarretar em nossas vidas a curto e longo prazo.</span>
                </TextContainer>
                <ImageContainer>
                    <img src={defineImagem()} />
                </ImageContainer>
                <ButtonContainer>
                    <Link style={{width: '80%'}} href="/quiz/perguntas">
                        <button>Iniciar quiz</button>
                    </Link>
                </ButtonContainer>
            </ContentContainer>
        </Container>
    )
}