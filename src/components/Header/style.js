'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const NavHeader = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    background-color: #00ff7f;
    padding: 8px;
    box-shadow: 0 0 20px 3px;



    img{
        background-color: #00ff7f;
        background-size: cover;
        margin-right: 16px;
        max-width: 100%;
        height: 32px;
        object-fit: cover;
    }

    .titulo{
        display: flex;
        justify-content: flex-end;
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
    gap: 40%;
    > svg {
        color: white;
        width: 30px;
        height: 30px;
        margin-left: 4px;
        cursor: pointer;
    }
`