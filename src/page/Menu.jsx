import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { PattyIndex } from "./PattyIndexAtom";
import burgerData from "../burgerDB/data.json";

const MenuPageWrapper = styled.div`
    height: 100vh;
    background-color: #f4ebdc;
`;
const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    height: 12%;
    background-color: orange;
`;
const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #512314;
`;
const NavZone = styled.ul`
    margin-right: 30px;
    color: #512314;
    & > :not(:first-child) {
        margin-left: 30px;
    }
    & > li {
        list-style: none;
        float: left;
        cursor: pointer;
        // color: ${(props) => (props.selected === 0 ? "white" : "red")};
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
    height: auto;
    padding: 20px;
`;

const BurgerBlock = styled.div`
    width: 200px;
    height: 170px;
    background-color: red;
    border: 2px solid black;
    border-radius: 50px;
    margin: 0px 20px 0px 20px;
    &:not(:first-child) {
        margin: 20px 20px 0px 20px;
    }
`;

const FooterWrapper = styled.footer`
    height: 8%;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 900;
`;
const GitHub = styled.div`
    width: 30px;
    height: 30px;
    background-image: url("./img/github.png");
    background-size: cover;
    opacity: 0.5;
    cursor: pointer;
`;
const Menu = () => {
    const pattyIndex = useRecoilValue(PattyIndex);
    const patties = ["BEEF", "CHICKEN", "SHRIMP"];
    // const d = burgerData.Beef
    return (
        <MenuPageWrapper>
            <HeaderWrapper>
                <Link to="/main">
                    <PrevButton />
                </Link>
                <Nav>
                    <Kind>{patties[pattyIndex]} BURGER</Kind>
                    <NavZone selected={pattyIndex}>
                        <li>Premium</li>
                        <li>Whopper</li>
                        <li>Junior&Burger</li>
                    </NavZone>
                </Nav>
            </HeaderWrapper>
            <ContentWrapper>
                {burgerData.Beef.map((burgerKind) => {
                    console.log(burgerKind.Premium);
                    return (
                        <BurgerBlock>
                            <div>버거 이미지</div>
                            <div>버거 이름</div>
                            {/* <span>{burgerKind.Premium}</span> */}
                            {/* <span>{burger.Premium.price.burgerOnly}</span> */}
                        </BurgerBlock>
                    );
                })}
            </ContentWrapper>
            <FooterWrapper>
                <div>create by YeriKim</div>
                <GitHub
                    onClick={() =>
                        window.open(
                            "https://github.com/yeri942/burgerking",
                            "_blank"
                        )
                    }
                />
            </FooterWrapper>
        </MenuPageWrapper>
    );
};

export default Menu;
