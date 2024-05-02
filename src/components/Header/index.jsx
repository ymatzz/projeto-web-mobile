'use client'
import { React, useState } from 'react';
import { Container, NavHeader, ContentContainer } from './style';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar';

export default function Header() {
    const [siderBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!siderBar);

    return (
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
    )
}