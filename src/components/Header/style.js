'use client'
import styled from 'styled-components';

export const Container = styled.div`
    min-height: 80px;
    background-color: #C60000;
    @media screen and (min-width: 600px){
        min-height: 100px;
    }
    width: 100%;
    display: flex;
    justify-content: center;
`

export const NavHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (min-width: 600px){
        align-items: start;
        padding: 8px;
        justify-content: space-between;
    }
    .icon{
        height: 32px;
        width: 32px;
        color: black;
    }
    .iconAtivo{
        height: 32px;
        width: 32px;
        color: #FFFFFF;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    @media screen and (min-width: 600px){
        gap: 10px;
    }
    img{
        background-size: cover;
        max-width: 100%;
        height: 137px;
        object-fit: cover;
        margin-bottom: -30.5px;
        @media screen and (min-width: 600px){
            height: 100px;
            margin-top: -20px;
        }
    }

    .titulo{
        display: flex;
        @media screen and (min-width: 600px){
            justify-content: center;
            align-items: start;
        }
        justify-content: flex-end;
        align-items: end;
        h2{
            font-family:'Poppins', sans-serif;
            font-size: 40px;
            color: white;
        }
    }
    
    .links{
        margin-bottom: 10px;
        display: flex;
        min-width: 300px;
        justify-content: space-around;
    }

    .link{
        text-decoration: none;
        color: black;
        font-weight: 400;
    }

    .link:hover{
        text-decoration: underline black;
        color: black;
        font-weight: 400;
    }

    .linkAtivo{
        text-decoration: none;
        color: black;
        font-weight: 800;
    }
`