'use client'
import styled from 'styled-components';

export const Container = styled.div`
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  background-image: url("/pulmao.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 600px){
      background-size: contain;
  }
  overflow-y: auto;
`

export const CarrosselContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 150px;

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
  display: flex;
  gap: 10px;
  width: 90%;
  span{
    text-align: justify;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: black;
  }
  h2{
    font-size: 22px;
  }
`