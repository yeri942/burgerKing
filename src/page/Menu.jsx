import styled from "styled-components";
import Header from "../components/menuPage/Header.jsx";
import Footer from "../components/menuPage/Footer.jsx";
import ContentArea from "../components/menuPage/ContentArea.jsx";

const Menu = () => {
    return (
        <MenuPageWrapper>
            <Header />
            <ContentArea />
            <Footer />
        </MenuPageWrapper>
    );
};

export default Menu;

const MenuPageWrapper = styled.div`
    height: calc(100vh - 165px);
`;
