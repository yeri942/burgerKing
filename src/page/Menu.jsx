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
    position: absolute;
    align-items: center;
    height: 100px;
    width: 100%;
    top: 0;
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
    padding: 100px 10px 10px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
`;

const BurgerBlock = styled.div`
    width: 200px;
    height: 170px;
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.img`
    width: 200px;
    height: 135px;
    object-fit: cover;
`;

const FooterWrapper = styled.footer`
    width: 100%;
    height: 65px;
    background-color: orange;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 900;
    bottom: 0px;
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
    console.log(burgerData.Beef[0].Premium);
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
                {burgerData.Beef[0].Premium.map((burgerKind) => {
                    return (
                        <BurgerBlock>
                            <Img
                                src={`../img/burgerImg/${burgerKind.name}.png`}
                            />
                            <div>{burgerKind.name}</div>
                            {/* <div>
                                <div>{burgerKind.price.burgerOnly}</div>
                                <div>{burgerKind.price.largeSet}</div>
                                <div>{burgerKind.price.smallSet}</div>
                            </div> */}

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
