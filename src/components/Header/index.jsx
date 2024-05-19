'use client'
import React, { useState, useEffect } from 'react';
import { Container, NavHeader, ContentContainer } from './style';
import Link from 'next/link';
import { LuHeartHandshake } from "react-icons/lu";
import { useRouter, usePathname } from 'next/navigation';
import { LiaQuestionSolid } from "react-icons/lia";
import { BsHouse } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";


export default function Header() {
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
        const rota = rotaLink;
        const isQuizPath = (rota === '/quiz' || rota === '/quiz/perguntas');
        const targetPath = path == '/quiz' ? isQuizPath : rota == path;
        if (windowWidth > 600) {
            return targetPath ? 'linkAtivo' : 'link';
        } else {
            return targetPath ? 'iconAtivo' : 'icon';
        }
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
                                <h2>Fortalecendo a Prevenção</h2>
                            </div>
                        </ContentContainer>
                    </NavHeader>
                </Container>
            ) : (
                <Container>
                    <NavHeader>
                        <Link href="/" style={{ "text-decoration": "none" }}>
                            <BsHouse className={isActive('/')} />
                        </Link>
                        <Link href="/curiosidades" style={{ "text-decoration": "none" }}>
                            <LiaQuestionSolid  className={isActive('/curiosidades')} />
                        </Link>
                        <Link href="/quiz" style={{ "text-decoration": "none" }}>
                            <IoGameControllerOutline className={isActive('/quiz')} />
                        </Link>
                        <Link href="/ajuda" style={{ "text-decoration": "none" }}>
                            <LuHeartHandshake className={isActive('/ajuda')} />
                        </Link>
                    </NavHeader>
                </Container>
            )}
        </>
    )
}