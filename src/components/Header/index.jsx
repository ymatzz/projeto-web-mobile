'use client'
import React, { useState, useEffect } from 'react';
import { Container, NavHeader, ContentContainer } from './style';
import Sidebar from '../Sidebar';
import SidebarItem from '../SidebarItem';
import Link from 'next/link';
import { FaTimes, FaBars, FaGamepad, FaQuestion } from 'react-icons/fa';
import { TiHome } from "react-icons/ti";
import { LuHeartHandshake } from "react-icons/lu";
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
    const [siderBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!siderBar);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const rotaLink = usePathname();

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

    const isActive = (path) => {
        return rotaLink == path ? 'linkAtivo' : 'link';
    };

    return (
        <>
            {windowWidth > 600 ? (
                <Container>
                    <NavHeader>
                        <ContentContainer>
                            <div className='links'>
                                <Link href="/" className={isActive('/')}>HOME</Link>
                                <Link href="/curiosidades" className={isActive('/curiosidades')}>INFOS</Link>
                                <Link href="/quiz" className={isActive('/quiz')}>QUIZ</Link>
                                <Link href="/ajuda" className={isActive('/ajuda')}>AJUDA</Link>
                            </div>
                            <div className='titulo'>
                                <h2>nome do site</h2>
                                <img src="corpo.png" />
                            </div>
                        </ContentContainer>
                    </NavHeader>
                </Container>
            ) : (
                <Container>
                    <NavHeader>
                        <Link href="/" style={{ "text-decoration": "none" }}>
                            <SidebarItem text={'HOME'} Icon={<TiHome />} />
                        </Link>
                        <Link href="/curiosidades" style={{ "text-decoration": "none" }}>
                            <SidebarItem text={'INFOS'} Icon={<FaQuestion />} />
                        </Link>
                        <Link href="/quiz" style={{ "text-decoration": "none" }}>
                            <SidebarItem text={'QUIZ'} Icon={<FaGamepad />} />
                        </Link>
                        <Link href="/ajuda" style={{ "text-decoration": "none" }}>
                            <SidebarItem text={'AJUDA'} Icon={<LuHeartHandshake />} />
                        </Link>
                    </NavHeader>
                </Container>
            )}
        </>
    )
}