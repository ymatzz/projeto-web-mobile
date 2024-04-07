'use client'
import React from 'react'; // Importe o React com R maiúsculo
import { Container } from "./style";

export default function SidebarItem({Icon, text}) {

    return (
        <Container>
            {Icon}
            {text}
        </Container>
    )
}