'use client'
import React from "react";
import Header from "../../components/Header";
import { Container, ContentContainer, Text, CardContainer, ImageContainer } from "./style";
import Card from "@/components/Card";

export default function Curiosidades() {
    return (
        <Container className="corpoPadrao">
            <Header text="Informações" />
            <ContentContainer>
                <Text>
                    <span> Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Quem num gosta di mim que vai caçá sua turmis! </span>
                </Text> 
            </ContentContainer>
        </Container>
    )
}