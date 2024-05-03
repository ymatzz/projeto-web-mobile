'use client'
import React, { useState, useEffect } from 'react';
import { Container, NavHeader, ContentContainer } from './style';
import Sidebar from '../Sidebar';
import SidebarItem from '../SidebarItem';
import Link from 'next/link';
import { FaTimes, FaBars, FaGamepad, FaQuestion } from 'react-icons/fa';
import { TiHome } from "react-icons/ti";
import { LuHeartHandshake } from "react-icons/lu";

export default function Header() {
    const [siderBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!siderBar);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Adiciona um event listener para o evento de redimensionamento da janela
        window.addEventListener('resize', updateWindowWidth);

        // Remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    return (
        <>
        { windowWidth > 600 ? (
            <Container>
                <NavHeader>
                    <ContentContainer>
                        <FaBars onClick={showSideBar} className='icon' />
                        <div className='titulo'>
                            <h2>nome do site</h2>
                            <img src="corpo.png" />
                        </div>
                    </ContentContainer>
                    {siderBar && <Sidebar active={setSideBar} />}
                </NavHeader>
            </Container>
        ) : (
            <Container>
                <NavHeader>
                    <Link href="/" style={{"text-decoration": "none"}}>
                        <SidebarItem text={'HOME'} Icon={<TiHome />} />
                    </Link>   
                    <Link href="/curiosidades" style={{"text-decoration": "none"}}>
                        <SidebarItem text={'INFOS'} Icon={<FaQuestion />} />
                    </Link>
                    <Link href="/quiz" style={{"text-decoration": "none"}}>
                        <SidebarItem text={'QUIZ'} Icon={<FaGamepad />} />
                    </Link>
                    <Link href="/ajuda" style={{"text-decoration": "none"}}>
                        <SidebarItem text={'AJUDA'} Icon={<LuHeartHandshake   />} />
                    </Link>
                </NavHeader>
            </Container>
        )}
        </>
    )
}