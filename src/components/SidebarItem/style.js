'use client'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #9D1221;
    font-size: 20px;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;
    @media screen and (max-width: 600px){
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 15px;
        gap: 10px;
        svg {
            height: 40px;
            width: 40px;
        }
    }
    
    @media screen and (min-width: 600px){
        svg {
            margin: 0 20px 0 10px;
        }
    }


    &:hover {
        background-color: black;
    }
`