'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 7%;
    padding: 8px;
    gap: 10px;
    @media screen and (min-width: 600px){
        max-width: 500px;
    }
`

export const Tittle = styled.div`
    h2{
        font-family:'Poppins', sans-serif;
        font-size: 16px;
        color: black;
        text-align: center;
        margin: 0;
    }
`

export const Text = styled.div`
    span{
            font-family:'Poppins', sans-serif;
            font-size: 12px;
            color: black;
            text-align: center;
            font-weight: 475;
        }
`