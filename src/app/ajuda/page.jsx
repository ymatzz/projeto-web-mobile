'use client'
import Header from "../../components/Header";
import { Container, ContentContainer, TextContainer, IconesContainer, SpanContainer, SubTitleContainer, CardContainer } from "./style";

export default function Ajuda() {
    return (
        <Container>
            <Header text="Sobre" />
            <ContentContainer>
                <TextContainer>
                    <h2>Os primeiros passos para sair do vício</h2>
                    <span>Se você está pronto para parar de usar drogas, então você está no caminho certo para obter ajuda. Neste artigo, vamos dar alguns passos importantes para ajudá-lo a parar de usar drogas.</span>
                    <span>Evitar ambientes que ajudem a recaída</span>
                    <span>Se expressar com amigos e família</span>
                    <span>Buscar por um grupo de apoio</span>
                    <span>Seguir as recomendações médicas</span>
                    <span>Buscar por ajuda especializada</span>
                </TextContainer>
            </ContentContainer>

        </Container>
    )
}