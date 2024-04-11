'use client'
import React, { useState } from 'react';
import { Container, Content} from './style';
import { FaTimes, FaBars, FaGamepad, FaQuestion } from 'react-icons/fa';
import { TiHome } from "react-icons/ti";
import { MdOutlineLaptopMac } from "react-icons/md";
import { AiOutlineMedium, AiOutlineSearch } from "react-icons/ai";
import SidebarItem from '../SidebarItem';
import Link from 'next/link';
import { LuHeartHandshake } from "react-icons/lu";

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
                    <SidebarItem text={'INFORMAÇÕES'} Icon={<FaQuestion />} />
                </Link>
                <Link href="/quiz" style={{"text-decoration": "none"}}>
                    <SidebarItem text={'QUIZ'} Icon={<FaGamepad />} />
                </Link>
                <Link href="/ajuda" style={{"text-decoration": "none"}}>
                    <SidebarItem text={'AJUDA'} Icon={<LuHeartHandshake   />} />
                </Link>
            </Content>
        </Container>
    )
}