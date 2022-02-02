import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
const MenuPageWrapper = styled.div`
    height: 100vh;
`;
const HeaderWrapper = styled.header`
    height: 12%;
    background-color: yellow;
`;

const PrevButton = styled.div``;
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
                <PrevButton> 이전 </PrevButton>
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
