'use client'
import styled from 'styled-components';

export const Container = styled.div`
`

export const BotaoVoltar = styled.div`
    margin-top: 24px;
    width: 95%;
    button{
        justify-content: flex-start;
        padding: 16px;
        background-color: #C60000;
        color: #FFFFFF;
        border-radius: 10px;
        font-size: 20px;
        border: none;
        cursor: pointer;
    }
`

export const QuizContainer = styled.div`
    width: 90%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .tituloPergunta{
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 24px;
    }
    .confirmar{
        margin-top: 10px;
        padding: 12px;
        background-color: #C60000;
        color: #FFFFFF;
        border-radius: 12px;
        font-size: 20px;
        border: none;
        cursor: pointer;
        font-weight: 800;
        max-width: 800px;
    }
`

export const Questao = styled.div`
    cursor: pointer;
    padding: 12px;
    border: 1px solid black;
    width: 100%;
    border-radius: 12px;
    margin-bottom: 4px;
    max-width: 800px;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;

    ${(props) => props.isClicked && `
    background-color: #C60000;
    span {
        color: #FFFFFF;
        font-weight: bold;
    }
    `}

    &:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
    }

`;

export const Final = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    span{
        font-weight: 700;
        font-size: 50px;
    }
    button{
        margin-top: 10px;
        padding: 12px;
        width: 200px;
        background-color: #C60000;
        color: #FFFFFF;
        border-radius: 12px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
`