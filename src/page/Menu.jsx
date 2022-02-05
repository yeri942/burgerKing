import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const MenuPageWrapper = styled.div`
    height: 100vh;
`;
const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    height: 12%;
    background-color: yellow;
`;
const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavZone = styled.ul`
    margin-right: 30px;
    & > :not(:first-child) {
        margin-left: 30px;
    }
    & > li {
        list-style: none;
        float: left;
        cursor: pointer;
    }
`;
const PrevButton = styled.button`
    background: no-repeat url("./img/left.png");
    background-size: cover;
    margin: 10px;
    width: 20px;
    height: 20px;
    border: none;
    object-fit: cover;
`;
const Kind = styled.span`
    margin-left: 30px;
    font-size: 30px;
`;
const ContentWrapper = styled.div`
    height: 80%;
    background-color: blue;
`;

const FooterWrapper = styled.footer`
    height: 8%;
    background-color: yellow;
`;

const Menu = () => {
    return (
        <MenuPageWrapper>
            <HeaderWrapper>
                <Link to="/main">
                    <PrevButton />
                </Link>
                <Nav>
                    <Kind>BEEF BURGER</Kind>
                    <NavZone>
                        <li>Premium</li>
                        <li>Whopper</li>
                        <li>Junior&Burger</li>
                    </NavZone>
                </Nav>
            </HeaderWrapper>
            <ContentWrapper>Content</ContentWrapper>
            <FooterWrapper>footer</FooterWrapper>
        </MenuPageWrapper>
    );
};

export default Menu;
