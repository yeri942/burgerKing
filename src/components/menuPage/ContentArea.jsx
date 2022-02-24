import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { PattyIndex, NavState, AboutBurger } from "../../state/atoms";
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
                setContentsList([]);
            } else if (navState === "jnb") {
                setContentsList(burgerData.Chicken.JB);
            }
        } else if (patties[pattyIndex] === "SHRIMP") {
            if (navState === "premium") {
                setContentsList(burgerData.Shrimp.Premium);
            } else if (navState === "whopper") {
                setContentsList([]);
            } else if (navState === "jnb") {
                setContentsList(burgerData.Shrimp.JB);
            }
        }
    });
    return (
        <ContentWrapper>
            <BurgerWapper>
                {contentsList &&
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
                            >
                                <Img
                                    src={`../img/burgerImg/${burgerKind.name}.png`}
                                />
                                <div>
                                    <b>{burgerKind.name}</b>
                                </div>
                            </BurgerBlock>
                        );
                    })}
            </BurgerWapper>
            {aboutBurger.name.length > 0 ? <DetailInfo /> : null}
        </ContentWrapper>
    );
};

export default ContentArea;

const ContentWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f4ebdc;
`;
const BurgerWapper = styled.div`
    color: black;
    padding: 20px 10px 10px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
`;
const BurgerBlock = styled.div`
    width: 200px;
    height: 170px;
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

const Img = styled.img`
    width: 200px;
    height: 150px;
    object-fit: cover;
`;
