'use client'
import { React, useState } from 'react';
import { Container, NavHeader } from './style';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar';

export default function Header() {
    const [siderBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!siderBar);

    return (
        <Container>
                <NavHeader>
                    <FaBars onClick={showSideBar} />
                    <h2>logo</h2>
                    <img src='iconemack.png' />
                    {siderBar && <Sidebar active={setSideBar} />}
                </NavHeader>
        </Container>
    )
}