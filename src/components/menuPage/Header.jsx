import styled from "styled-components";
import { Link } from "react-router-dom";
import { PattyIndex, NavState, AboutBurger } from "../../state/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Header = () => {
    const pattyIndex = useRecoilValue(PattyIndex);
    const patties = ["BEEF", "CHICKEN", "SHRIMP"];
    const navState = useRecoilValue(NavState);
    const setNavState = useSetRecoilState(NavState);
    const setAboutBurger = useSetRecoilState(AboutBurger);
    const clearAboutburgerValue = () => {
        setAboutBurger({
            name: "",
            price: {
                burgerOnly: 0,
                largeSet: 0,
                smallSet: 0,
            },
        });
    };
    const changeNavState = (e) => {
        setNavState(e.target.id);
        clearAboutburgerValue();
    };

    const clickPrevButton = () => {
        setNavState("premium");
        clearAboutburgerValue();
    };

    return (
        <HeaderWrapper>
            <Link to="/main">
                <PrevButton onClick={clickPrevButton} />
            </Link>
            <Nav>
                <Kind>{patties[pattyIndex]} BURGER</Kind>
                <NavZone>
                    <li
                        id="premium"
                        className={navState === "premium" ? "active" : null}
                        onClick={changeNavState}
                    >
                        Premium
                    </li>
                    <li
                        id="whopper"
                        className={navState === "whopper" ? "active" : null}
                        onClick={changeNavState}
                    >
                        Whopper
                    </li>
                    <li
                        id="jnb"
                        className={navState === "jnb" ? "active" : null}
                        onClick={changeNavState}
                    >
                        Junior&Burger
                    </li>
                </NavZone>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
    position: fixed;
    align-items: center;
    height: 100px;
    width: 100%;
    top: 0;
    background-color: orange;
    z-index: 999;
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
        margin: 5px 0;
        padding: 10px;
    }
    .active {
        transition-duration: 1s;
        background-color: #512314;
        color: orange;
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
