'use client'
import styled from 'styled-components';

export const Container = styled.div`
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    background-image: url("/pagina_ajuda.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-y: auto;
    opacity: 0.9;
`

export const TextoContent = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`

export const TextContainer = styled.div`
    width: 80%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2{
        font-size: 32px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: white;
        text-align: center;
    }
    span{
        margin-top: 10px;
        text-align: center;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        color: white;
        font-weight: 400;
        text-align: justify;
    }
    h3{
        margin-top: 10px;
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: white;
        text-align: justify;
    }
`
export const TituloContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 32px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: white;
        text-align: center;
    }
    span{
        margin-top: 10px;
        text-align: center;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
        color: white;
        font-weight: 400;
        text-align: justify;
    }
`