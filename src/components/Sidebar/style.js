'use client'
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    background-color: gray;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 250px;
    box-shadow: 0 0 20px 3px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSideBar .4s;

    > svg {
        color: white;
        width: 30px;
        height: 30px;
        margin-left: 16px;
        margin-top: 16px;
        cursor: pointer;
    }

    @keyframes showSideBar {
    from {
        opacity: 0;
        width: 0;
    } to {
        opacity: 1;
        width: 250px;
    }
}
`

export const Content = styled.div`
    margin-top: 20px;
`
