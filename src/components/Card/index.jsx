'use client'
import { React, useState } from 'react';
import { Container, ContentContainer, Tittle, Text } from './style';

export default function Card({titulo, texto}) {

    return (
        <Container>
            <ContentContainer>
                <Tittle>
                    <h2>{titulo}</h2>
                </Tittle>
                <Text>
                    <span>{texto}</span>
                </Text>
            </ContentContainer>
        </Container>
    )
}