'use client'
import styled from 'styled-components';

export const Container = styled.div`
`

export const CarrosselContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/pulmao.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (min-width: 600px){
        background-size: contain;
    }
`

export const ContentCarrosselContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`