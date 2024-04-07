'use client'
import { React, useState } from 'react';
import { Container, ContentContainer } from './style';

export default function Card({height}) {

    return (
        <Container>
            <ContentContainer height={height}>
                <span>IMG/TEXT</span>
            </ContentContainer>
        </Container>
    )
}