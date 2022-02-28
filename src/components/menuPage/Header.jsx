import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    PattyIndex,
    NavState,
    AboutBurger,
    dropdownState,
} from "../../state/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const pattyIndex = useRecoilValue(PattyIndex);
    const patties = ["BEEF", "CHICKEN", "SHRIMP"];
    const navState = useRecoilValue(NavState);
    const setNavState = useSetRecoilState(NavState);
    const setAboutBurger = useSetRecoilState(AboutBurger);
    const dropdown = useRecoilValue(dropdownState);
    const setDropdown = useSetRecoilState(dropdownState);

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
    const dropdownClick = () => {
        setDropdown(!dropdown);
    };
    return (
        <>
            <HeaderWrapper>
                <Link to="/">
                    <PrevButton onClick={clickPrevButton} />
                </Link>
                <Nav>
                    <Kind>{patties[pattyIndex]} BURGER</Kind>
                    <FontAwesomeIconStyled
                        icon={faBars}
                        onClick={dropdownClick}
                    />

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

            {dropdown && (
                <DropdownNav>
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
                </DropdownNav>
            )}
        </>
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
    @media (max-width: 480px) {
        height: 65px;
    }
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
        @media (max-width: 775px) {
            margin-left: 0px;
        }
    }
    @media (max-width: 838px) {
        display: none;
    }
    & > li {
        list-style: none;
        float: left;
        cursor: pointer;
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
    @media (max-width: 480px) {
        margin-left: 2%;
        font-size: 20px;
    }
`;
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    display: none;
    font-size: 30px;
    margin: 20px;
    @media (max-width: 838px) {
        display: block;
    }
`;

const DropdownNav = styled.div`
    background-color: orange;
    margin-top: 100px;
    & > li {
        display: flex;
        list-style: none;
        padding: 15px 0;
        width: 100%;
        justify-content: center;
        color: #512314;
    }
    .active {
        transition-duration: 1s;
        background-color: #512314;
        color: orange;
    }
    @media (max-width: 480px) {
        margin-top: 65px;
    }
`;
