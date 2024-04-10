'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    display: flex;
`

export const ContentContainer = styled.div`
    height: ${(props) => props.height};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C60000;
    border-radius: 10%;
    span{
            font-family:'Poppins', sans-serif;
            font-size: 12px;
            color: white;
        }
`