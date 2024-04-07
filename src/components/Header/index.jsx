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
                        <FaBars onClick={showSideBar} />
                        <div className='titulo'>
                            <h2>texto principal</h2>
                        </div>
                    </ContentContainer>
                    {siderBar && <Sidebar active={setSideBar} />}
                </NavHeader>
        </Container>
    )
}