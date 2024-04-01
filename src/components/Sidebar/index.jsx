'use client'
import React, { useState } from 'react';
import { Container, Content} from './style';
import { FaTimes, FaBars } from 'react-icons/fa';
import SidebarItem from '../SidebarItem';

export default function Sidebar({active}) {
    const fecharSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={fecharSidebar} />
            <Content>
                <SidebarItem text={'TESTE'} Icon={<FaBars />} />
                <SidebarItem text={'AAAAAAA'} Icon={<FaTimes />} />
            </Content>
        </Container>
    )
}