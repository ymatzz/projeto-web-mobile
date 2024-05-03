'use client'
import styled from 'styled-components';

export const Container = styled.div`
`

export const ContentContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 30px;
`

export const Text = styled.div`
    width: 80%;
    display: flex;
    span{
        text-align: justify;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        color: black;
    }
    .textoNegrito{
        font-weight: bold;
    }
`

export const CardContainer = styled.div`
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const ImageContainer = styled.div`
    margin-top: 10%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    height: 100px;
    border-radius: 5%;
    span{
        font-size: 60px;
        font-family: 'Poppins', sans-serif;
        color: white;
    }
`