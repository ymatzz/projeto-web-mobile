'use client'
import React, { useState } from 'react';
import { Container, Content} from './style';
import { FaTimes, FaBars, FaGamepad, FaQuestion } from 'react-icons/fa';
import { TiHome } from "react-icons/ti";
import { MdOutlineLaptopMac } from "react-icons/md";
import { AiOutlineMedium, AiOutlineSearch } from "react-icons/ai";
import SidebarItem from '../SidebarItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar({active}) {
    const fecharSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={fecharSidebar} />
            <Content>
                <Link href="/" style={{"text-decoration": "none"}}>
                    <SidebarItem text={'HOME'} Icon={<TiHome />} />
                </Link>   
                <Link href="/curiosidades" style={{"text-decoration": "none"}}>
                    <SidebarItem text={'CURIOSIDADES'} Icon={<FaQuestion />} />
                </Link>
                <SidebarItem text={'QUIZ'} Icon={<FaGamepad />} />
                <Link href="/ajuda" style={{"text-decoration": "none"}}>
                    <SidebarItem text={'AJUDA'} Icon={<AiOutlineMedium  />} />
                </Link>
            </Content>
        </Container>
    )
}