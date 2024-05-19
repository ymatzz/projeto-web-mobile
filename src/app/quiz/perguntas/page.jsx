'use client'
import React, { useEffect, useState } from "react";
import { Container, BotaoVoltar, QuizContainer, Questao, Final } from "./style";
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

export default function Perguntas() {
    const [perguntas, setPerguntas] = useState([]);
    const [perguntaAtual, setPerguntaAtual] = useState("");
    const [indexAtual, setIndexAtual] = useState(0);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
    const [respostasCorretas, setRespostasCorretas] = useState(0);

    const handleClick = (index, opcao) => {
        setOpcaoSelecionada(opcao);
        // Se o índice clicado é o mesmo que o armazenado, "desclique"
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
        }
    };

    const carregaPerguntas = async () => {
        const url = 'http://localhost:8000/questoes';
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPerguntas(data);
            setPerguntaAtual(data[0])
            setIndexAtual(0);
            console.log('aaaaa', data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        carregaPerguntas();
    }, []);

    const passaPergunta = () => {
        let valorAtual = respostasCorretas;
        let valorIndex = indexAtual;
        if (opcaoSelecionada == perguntaAtual.correctAnswer){
            valorAtual = valorAtual + 1;
            setRespostasCorretas(valorAtual)
        }
        valorIndex = valorIndex + 1;
        setIndexAtual(valorIndex);
        setPerguntaAtual(perguntas[valorIndex]);
        setClickedIndex(null)
    }

    return (
        <Container className="corpoPadrao">
            {indexAtual < perguntas.length && (
                <BotaoVoltar>
                    <Link href="/quiz">
                        <button><FaArrowLeft /></button>
                    </Link>
                </BotaoVoltar>
            )}
            {perguntas && indexAtual < perguntas.length ? (
                <QuizContainer>
                    <h2>{perguntaAtual.id})</h2>
                    <span className="tituloPergunta">{perguntaAtual.question}</span>
                    {perguntaAtual.options.map((opcao, index) => (
                        <Questao
                            key={index}
                            isClicked={clickedIndex === index}
                            onClick={() => handleClick(index, opcao)}
                        >
                            <span>{opcao}</span>
                        </Questao>
                    ))}
                    <button className="confirmar" onClick={passaPergunta}>confirmar</button>
                </QuizContainer>
            ) : (
                <Final>
                    <h2>Total de acertos:</h2>
                    <span>{respostasCorretas}</span>
                    <Link href="/quiz">
                        <button> Voltar </button>
                    </Link>
                </Final>
            )}
        </Container>
    );
}
