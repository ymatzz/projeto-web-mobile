'use client'
import React, { useState, useEffect } from 'react';
import Card from '../components/Card'; // Importe o componente Card
import { Container, CarrosselContainer, ContentCarrosselContainer, Slide, TextContainer, ContentContainer } from './style';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [conselho, setConselho] = useState(null);

  const cards = [
    {
      titulo: 'Você sabe o que são Drogas Depressoras?',
      texto: 'Álcool, Barbitúricos, Opioides, benzodiazepínicos. São substâncias que diminuem a atividade do sistema nervoso central, resultando em efeitos como sedação, relaxamento muscular, diminuição da ansiedade e, em doses mais altas, podem causar sonolência, confusão mental, respiração lenta e até mesmo coma. Nos casos extremos esses tipos de substâncias podem gerar paradas cardiacas ou respiratorias. Também chamada de alucinógenas, já que alteram as funções psíquicas do indivíduo e modifica a sua percepção da realidade. Os prejuízos mais comuns associados ao uso são: redução da memória e da concentração; dificuldade de ajuste social, tais como desemprego; aumento de conflitos afetivos e familiares; consequências físicas, tais como doenças cardíacas, renais e hepáticas.'
    },
    {
      titulo: 'Você sabe o que as Drogas Perturbadoras podem fazer com a mente?',
      texto: 'As drogas perturbadoras também chamadas de alucinógenas, provocam alterações no sistema nervoso central, que como resultado acaba provocando alucinações e delírios. Esses tipos de drogas prejudicam a coordenação motora, a memória e atenção, podendo provocar com o uso contínuo, ansiedade, depressão ou síndrome do pânico. Drogas como: Maconha, Haxixe, LSD e Ecstasy causam alterações significativas no funcionamento normal do cérebro alterando também a percepção, pensamento, humor e consciência do usuário. Essas substâncias, quando usadas de forma inadequada ou em ambientes desfavoráveis, podem desencadear experiências negativas, crises de ansiedade, psicose temporária e, em casos extremos, podem contribuir para acidentes e lesões graves.'
    },
    {
      titulo: 'O álcool é responsável pelo maior número de mortes no Brasil',
      texto: 'No Brasil, morreram 40.546 pessoas devido ao uso de substâncias lícitas e ilícitas, dados que podem estar subestimados devido à complexidade do registro. O maior número de óbitos se deve ao uso de álcool (85,8%), seguido pelo fumo (11,5%) e ao uso de mais de uma substância psicoativa (1,2%). Os dados do SIM apontam que os transtornos mentais comportamentais devido ao uso de álcool apresentam o maior número de mortes se comparados às demais drogas. No período de 2006 até 2010, o Estado que obteve o maior número de óbitos foi Minas Gerais, com um total de 5.441 óbitos; seguido de São Paulo, com 5.320; e Ceará, com 2.890. Para se ter ideia, juntas, essas duas drogas lícitas - o álcool e o fumo - foram responsáveis pela morte de aproximadamente 40.000 pessoas dos anos de 2006 até 2010.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % cards.length);
  };

  const prevSlide = () => {
    const nextSlideIndex = currentSlide - 1 < 0 ? cards.length - 1 : currentSlide - 1;
    setCurrentSlide(nextSlideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000); // Avança para o próximo slide a cada 5 segundos (5000 ms)

    // Limpa o intervalo ao desmontar o componente
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]); // Reexecuta o efeito sempre que o currentSlide mudar

  const conselhoApi = async () => {
    const url = 'https://api.adviceslip.com/advice'
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('adsda', data)
      setConselho(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    conselhoApi();
  }, []);

  return (
    <Container className="corpoPadrao">
      <ContentContainer>
        <TextContainer>
            <h2>Conselho do dia:</h2>
            {conselho && conselho.slip ? (
              <span>{conselho.slip.advice}</span>
            ) : (
              <span>Carregando conselho...</span>
            )}
        </TextContainer>
        <CarrosselContainer>
          <FaArrowLeft onClick={prevSlide} style={{ cursor: 'pointer' }} />
          <ContentCarrosselContainer>
            {cards.map((card, index) => (
              <Slide key={index} isActive={index === currentSlide}>
                <Card titulo={card.titulo} texto={card.texto} />
              </Slide>
            ))}
          </ContentCarrosselContainer>
          <FaArrowRight onClick={nextSlide} style={{ cursor: 'pointer' }} />
        </CarrosselContainer>
      </ContentContainer>
    </Container>
  );
}
