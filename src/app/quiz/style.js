'use client'
import styled from 'styled-components';

export const Container = styled.div`
`
export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    @media screen and (max-width: 600px){
        justify-content: center;
        margin-top: -50px;
    }
    gap: 20px;
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    span{
        text-align: justify;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        color: black;
        font-weight: 600;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    height: 200px;
    @media screen and (min-width: 600px){
        height: 500px;
        width: 800px;
    }
    img{
        width: 100%;
        height: 100%;
        background-size: fill;
        border-radius: 10px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    @media screen and (min-width: 600px){
        max-width: 500px;
    }
    button{
        width: 100%;
        padding: 16px;
        background-color: #C60000;
        color: #FFFFFF;
        border-radius: 10px;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        border: none;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
`

