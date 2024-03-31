'use client'
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const NavHeader = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #172B4D;
    padding: 8px;
    box-shadow: 0 0 20px 3px;

    > svg {
        color: white;
        width: 30px;
        height: 30px;
        margin-left: 16px;
        cursor: pointer;
    }

    img{
        background-color: #172B4D;
        background-size: cover;
        margin-right: 16px;
        max-width: 100%;
        height: 32px;
    }
`