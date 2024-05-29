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
  position: relative;
  width: 90%;
  min-height: 455px;
  overflow: hidden; 
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

export const TextContainer = styled.div`
  margin-top: 24px;
  width: 90%;
  span{
    text-align: justify;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: black;
  }
`