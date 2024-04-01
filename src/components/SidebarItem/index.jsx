'use client'
import React from 'react'; // Importe o React com R maiúsculo
import { Container } from "./style";
import { FaTimes } from 'react-icons/fa'; // Importe o ícone FaTimes

export default function SidebarItem({Icon, text}) {

    return (
        <Container>
            {Icon}
            {text}
        </Container>
    )
}