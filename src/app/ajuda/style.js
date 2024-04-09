'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("/teste.jpg");
    background-size: cover;
`

export const TextContainer = styled.div`
    width: 100%;
    height: 20%;
    margin-top: 12px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    margin-top: 20px;
    > svg {
        width: 20px;
        height: 20px;
        margin-right: 12px;
    }
`

export const SpanContainer = styled.div`
    display: flex;
    width: 90%;
    height: 75%;
    justify-content: center;
    align-items: center;
    span{
        margin-left: 12px;
        font-size: 16px;
        color: black;
        text-align: justify;
    }
`

export const SubTitleContainer = styled.div`
    width: 100%;
    margin-top: 15%;
    h2 {
        font-size: 32px;
        color: white;
        margin-left: 12px;
    }
`

export const CardContainer = styled.div`
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`