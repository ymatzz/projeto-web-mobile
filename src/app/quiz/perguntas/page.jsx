'use client'
import React, { useEffect, useState } from "react";
import { Container, BotaoVoltar, QuizContainer } from "./style";
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

export default function Perguntas(){
    const [perguntas, setPerguntas] = useState([]);

    const carregaPerguntas = async () => {
        const url = 'http://localhost:8000/quiz'
        try{
            const response = await fetch(url);
            const data = await response.json();
            setPerguntas(data);
            console.log('aaa', data);
        } catch (e){
            console.error(e);
        }
    }
    
    useEffect(() => {
        carregaPerguntas();
    }, []);

    return (
        <Container className="corpoPadrao">
            <BotaoVoltar>
                <Link href="/quiz" >
                    <button><FaArrowLeft /></button>
                </Link>
            </BotaoVoltar>
            <QuizContainer>
                <h2>Pergunta {perguntas[0].id}: </h2>
                <span>{perguntas[0].pergunta}</span>
            </QuizContainer>
        </Container>

    )
}

