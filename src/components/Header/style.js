'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 255px;
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

    img{
        background-size: cover;
        max-width: 100%;
        height: 137px;
        object-fit: cover;
        margin-bottom: -30.5px;
        padding-left: -60px;
    }

    .titulo{
        display: flex;
        justify-content: flex-end;
        align-items: end;
        h2{
            font-family:'Poppins', sans-serif;
            font-size: 40px;
            color: white;
        }
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 35%;
    > svg {
        color: white;
        width: 30px;
        height: 30px;
        margin-left: 4px;
        cursor: pointer;
    }
`