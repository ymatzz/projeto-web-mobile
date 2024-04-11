'use client'
import styled from 'styled-components';

export const Container = styled.div`
`

export const TextContainer = styled.div`
    margin-top: 10%;
    display: flex;
    justify-content: center;
    width: 80%;
    span{
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        color: black;
    }
`

export const ImageContainer = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
    width: 80%;
    height: 200px;
    img{
        width: 100%;
        background-size: fill;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
    width: 80%;
    height: 40px;
    button{
        width: 100%;
        height: 100%;
        background-color: #C60000;
        color: #FFFFFF;
        border-radius: 10px;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        border: none;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
    }
`

