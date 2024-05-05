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
  min-height: 455px; /* Altura do contêiner do slide */
  overflow: hidden; /* Esconder conteúdo que transborda */
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.isActive ? 1 : 0)}; /* Mostrar apenas o slide ativo */
  transition: opacity 0.5s ease;
`;