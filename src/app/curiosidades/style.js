'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    h2{
        margin-top: 12px;
        margin-left: 12px;
        font-size: 32px;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const Text = styled.div`
    width: 90%;
    height: 200px;
    background-color: red;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 60px;
        font-family: 'Poppins', sans-serif;
        color: white;
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