import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
const MenuPageWrapper = styled.div`
    height: 100vh;
`;
const HeaderWrapper = styled.header`
    height: 12%;
    background-color: yellow;
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
            <HeaderWrapper>Nav</HeaderWrapper>
            <ContentWrapper>Content</ContentWrapper>
            <FooterWrapper>footer</FooterWrapper>
        </MenuPageWrapper>
    );
};

export default Menu;
