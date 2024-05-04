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
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
  /* Estilos para o botão */
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff; /* Cor de fundo do botão (azul) */
  color: #fff; /* Cor do texto (branco) */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px; /* Margem à direita para separar os botões */
  transition: background-color 0.3s ease; /* Transição suave da cor de fundo */

  &:hover {
    background-color: #0056b3; /* Cor de fundo do botão ao passar o mouse */
  }
`;