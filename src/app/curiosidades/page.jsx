'use client'
import Header from "../../components/Header";
import { Container, ContentContainer, Text, CardContainer, ImageContainer } from "./style";
import Card from "@/components/Card";

export default function Curiosidades() {
    return (
        <Container>
            <Header text="Curiosidades" />
            <h2> Curiosidades </h2>
            <ContentContainer>
                <Text>
                    <span> texto </span>
                </Text>
                <CardContainer>
                    <Card height='100px' />
                    <Card height='100px' />
                    <Card height='100px' />
                </CardContainer>
                <ImageContainer>
                    <span>IMG</span>
                </ImageContainer>
            </ContentContainer>
        </Container>
    )
}