'use client'
import Header from "../../components/Header";
import { Container, TextContainer, IconesContainer, SpanContainer, SubTitleContainer, CardContainer } from "./style";
import Card from "@/components/Card";
import { FaHeart } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";

export default function Ajuda() {
    return (
        <Container>
            <Header text="Sobre" />
            <TextContainer>
                <IconesContainer>
                    <RiMessage2Line />
                    <FaHeart />
                </IconesContainer>
                <SpanContainer>
                    <span> Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Quem num gosta di mim que vai caçá sua turmis! </span>
                </SpanContainer>
            </TextContainer>
            <SubTitleContainer>
                <h2>Como ajudar</h2>
            </SubTitleContainer>
            <CardContainer>
                <Card height="150px" />
                <Card height="150px" />
                <Card height="150px" />
            </CardContainer>
        </Container>
    )
}