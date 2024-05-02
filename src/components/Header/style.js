'use client'
import styled from 'styled-components';

export const Container = styled.div`
    min-height: 25%;
    @media screen and (min-width: 600px){
        min-height: 15%;
    }
    width: 100%;
    display: flex;
    justify-content: center;
`

export const NavHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    background-color: #C60000;
    padding: 8px;
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 35%;
    @media screen and (min-width: 600px){
        gap: 0;
    }
    .icon {
        color: white;
        @media screen and (min-width: 600px){
            min-width: 30px;
            min-height: 30px;
        }
        width: 30px;
        height: 30px;
        margin-left: 4px;
        cursor: pointer;
    }
    img{
        background-size: cover;
        max-width: 100%;
        height: 137px;
        object-fit: cover;
        margin-bottom: -30.5px;
        @media screen and (min-width: 600px){
            height: 120px;
        }
    }

    .titulo{
        display: flex;
        @media screen and (min-width: 600px){
            justify-content: center;
            align-items: center;
        }
        justify-content: flex-end;
        align-items: end;
        h2{
            font-family:'Poppins', sans-serif;
            font-size: 40px;
            color: white;
        }
    }
`