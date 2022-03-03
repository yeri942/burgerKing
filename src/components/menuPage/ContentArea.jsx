import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    PattyIndex,
    NavState,
    AboutBurger,
    dropdownState,
} from "../../state/atoms";
import burgerData from "../../burgerDB/data.json";
import { useEffect, useState } from "react";
import DetailInfo from "./DetailInfo";

const ContentArea = () => {
    const pattyIndex = useRecoilValue(PattyIndex);
    const patties = ["BEEF", "CHICKEN", "SHRIMP"];
    const navState = useRecoilValue(NavState);
    const [contentsList, setContentsList] = useState("");
    const aboutBurger = useRecoilValue(AboutBurger);
    const setAboutBurger = useSetRecoilState(AboutBurger);
    const dropdown = useRecoilValue(dropdownState);
    useEffect(() => {
        if (patties[pattyIndex] === "BEEF") {
            if (navState === "premium") {
                setContentsList(burgerData.Beef.Premium);
            } else if (navState === "whopper") {
                setContentsList(burgerData.Beef.Whopper);
            } else if (navState === "jnb") {
                setContentsList(burgerData.Beef.JB);
            }
        } else if (patties[pattyIndex] === "CHICKEN") {
            if (navState === "premium") {
                setContentsList(burgerData.Chicken.Premium);
            } else if (navState === "whopper") {
                setContentsList("");
            } else if (navState === "jnb") {
                setContentsList(burgerData.Chicken.JB);
            }
        } else if (patties[pattyIndex] === "SHRIMP") {
            if (navState === "premium") {
                setContentsList(burgerData.Shrimp.Premium);
            } else if (navState === "whopper") {
                setContentsList("");
            } else if (navState === "jnb") {
                setContentsList(burgerData.Shrimp.JB);
            }
        }
    });
    return (
        <ContentWrapper dropdownState={dropdown}>
            <BurgerWapper ss={aboutBurger.name}>
                {contentsList === "" ? (
                    <EmptyBlock>
                        <EmptyImg src={`../img/empty.png`} />
                        <div>No burgers</div>
                    </EmptyBlock>
                ) : (
                    contentsList.map((burgerKind) => {
                        return (
                            <BurgerBlock
                                onClick={() =>
                                    setAboutBurger({
                                        name: burgerKind.name,
                                        price: {
                                            burgerOnly:
                                                burgerKind.price.burgerOnly,
                                            largeSet: burgerKind.price.largeSet,
                                            smallSet: burgerKind.price.smallSet,
                                        },
                                    })
                                }
                                key={burgerKind.name}
                            >
                                <Img
                                    src={`../img/burgerImg/${burgerKind.name}.png`}
                                />
                                <div>
                                    <b>{burgerKind.name}</b>
                                </div>
                            </BurgerBlock>
                        );
                    })
                )}
            </BurgerWapper>
            {aboutBurger.name.length > 0 && <DetailInfo />}
        </ContentWrapper>
    );
};

export default ContentArea;

const ContentWrapper = styled.div`
    font-family: "Noto Sans KR";
    margin-top: ${(props) => (props.dropdownState ? 0 : "5vh")};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f4ebdc;
    height: auto;
    min-height: 95vh;
    @media (max-width: 1025px) {
        flex-direction: column-reverse;
    }
    @media (max-width: 480px) {
        margin-top: ${(props) => (props.dropdownState ? 0 : "65px")};
        height: calc(100vh - 65px);
    }
`;
const BurgerWapper = styled.div`
    width: ${(props) => (props.ss.length > 0 ? "calc(100% - 500px)" : "80%")};
    color: black;
    display: inline-flex;
    justify-items: center;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 1025px) {
        width: 100%;
        margin: 30px 0;
    }
`;
const BurgerBlock = styled.div`
    width: 25vh;
    margin: 1.5% 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-size: 2vh;
    @media (max-width: 838px) {
        width: 20%;
        margin: 10px 20px;
        font-size: 1.5vw;
    }
    @media (max-width: 480px) {
        width: 35%;
        margin: 10px 20px;
        font-size: 3.5vw;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 480px) {
        width: 120%;
    }
`;

const EmptyBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 900;
    opacity: 0.6;
`;

const EmptyImg = styled.img`
    width: 70%;
    object-fit: cover;
`;
