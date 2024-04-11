'use client'
import styled from 'styled-components';

export const Container = styled.div`
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/ajuda_fundo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
`

export const TextContainer = styled.div`
    width: 80%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 28px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: white;
    }
    span{
        margin-top: 5%;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        color: white;
        font-weight: 400;
    }
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