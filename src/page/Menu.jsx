import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const MenuPageWrapper = styled.div`
    height: 100vh;
`;
const HeaderWrapper = styled.header`
    height: 12%;
    background-color: yellow;
`;

const PrevButton = styled.button`
    background: no-repeat url("./img/left.png");
    background-size: cover;
    margin: 10px;
    width: 30px;
    height: 30px;
    border: none;
    object-fit: cover;
`;
const Kind = styled.span``;
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

                <Kind>BEEF</Kind>
                <span>
                    <span>Premium</span>
                    <span>Whopper</span>
                    <span>Junior&Burger</span>
                </span>
            </HeaderWrapper>
            <ContentWrapper>Content</ContentWrapper>
            <FooterWrapper>footer</FooterWrapper>
        </MenuPageWrapper>
    );
};

export default Menu;
