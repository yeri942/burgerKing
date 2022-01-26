import "./App.css";
import styled, { keyframes } from "styled-components";
import react, { useState, useEffect } from "react";

function App() {
    const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
    const [pattyIndex, setPattyIndex] = useState(0);
    const patties = ["beef", "chicken"];
    const clickPrevBtn = () => {
        if (pattyIndex === 0) {
            setPattyIndex(patties.length - 1);
        } else {
            setPattyIndex(pattyIndex - 1);
        }
    };
    const clickNextBtn = () => {
        if (pattyIndex === patties.length - 1) {
            setPattyIndex(0);
        } else {
            setPattyIndex(pattyIndex + 1);
        }
    };
    const handleFollow = () => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    };

    useEffect(() => {
        console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [ScrollY]);

    useEffect(() => {
        const watch = () => {
            window.addEventListener("scroll", handleFollow);
        };
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
        };
    });
    return (
        <WrabMain>
            <Wrab scroll={ScrollY}>
                {ScrollY < 108 ? (
                    <WrabScroll>
                        <Mouse src="./img/mousescroll.png"></Mouse>
                        <Down src="./img/down.png"></Down>
                    </WrabScroll>
                ) : (
                    <WrabBtn>
                        <PrevButton
                            type="button"
                            onClick={clickPrevBtn}
                            imgName={patties[pattyIndex]}
                        ></PrevButton>
                        <NextButton
                            type="button"
                            onClick={clickNextBtn}
                            imgName={patties[pattyIndex]}
                        ></NextButton>
                    </WrabBtn>
                )}
                <WrabMainTexts>
                    <div>
                        <MainText scroll={ScrollY}>Choice</MainText>
                        <MainText scroll={ScrollY}>Your</MainText>
                        <MainText scroll={ScrollY}>Burger</MainText>
                    </div>
                </WrabMainTexts>
                <WrabPattyTexts>
                    <PattyText scroll={ScrollY}>
                        {patties[pattyIndex]}
                    </PattyText>
                </WrabPattyTexts>
                <WrabBurgerImg>
                    <BurgerImg
                        style={{
                            background:
                                "center / cover no-repeat url(./img/topburn.png)",
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                    <BurgerImg
                        style={{
                            background:
                                "center / cover no-repeat url(./img/lettuce.png)",
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                    <BurgerImg
                        style={{
                            background:
                                "center / cover no-repeat url(./img/onion.png)",
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                    <BurgerImg
                        style={{
                            background:
                                "center / cover no-repeat url(./img/pickle.png)",
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                    <BurgerImg
                        style={{
                            background:
                                "center / cover no-repeat url(./img/tomato.png)",
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                    <BurgerImg
                        style={{
                            background:
                                "center / cover no-repeat url(./img/cheese.png)",
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                    <BurgerImg
                        style={{
                            background: `center / cover no-repeat url(./img/${patties[pattyIndex]}_patty.png)`,
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                    <BurgerImg
                        style={{
                            background:
                                "center / cover no-repeat url(./img/bottomburn.png)",
                        }}
                        scroll={ScrollY}
                    ></BurgerImg>
                </WrabBurgerImg>
            </Wrab>
        </WrabMain>
    );
}
const WrabMain = styled.div`
    height: 150vh;
`;
const Wrab = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    text-align: center;
    background-color: ${(props) => (props.scroll > 100 ? "#A15800" : "orange")};
    transition: 1s;
`;
const WrabScroll = styled.div`
    position: absolute;
    display: flex;
    z-index: 10;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 10%;
    right: 15%;
`;
const Mouse = styled.img`
    position: absolute;
    width: 100px;
`;
const DownBlink = keyframes`
    0%{opacity:0}
    33%{opacity:1}
    66%{opacity:0}
    100%{opacity:1}

`;
const Down = styled.img`
    position: absolute;
    width: 50px;
    top: 70%;
    animation: ${DownBlink} 2s 0s infinite linear alternate;
`;
const WrabBtn = styled.div`
    position: absolute;
    display: flex;
    z-index: 20;
    height: 10%;
    top: 62%;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const PrevButton = styled.button`
    margin-right: 600px;
    background: no-repeat url("./img/left.png");
    background-size: cover;
    width: 100px;
    height: 100px;
    border: none;
    object-fit: cover;
`;
const NextButton = styled.button`
    width: 100px;
    height: 100px;
    background: no-repeat url("./img/right.png");
    background-size: cover;
    border: none;
    object-fit: cover;
`;
const WrabPattyTexts = styled.div`
    top: 30%;
    position: absolute;
    width: 100%;
`;
const WrabMainTexts = styled.div`
    position: absolute;
    display: flex;
    text-align: left;
    z-index: 10;
    height: 100%;
    align-items: center;
    width: 80%;
`;
const MainText = styled.div`
    margin-left: 50px;
    font-size: 7em;
    font-weight: 900;
    opacity: ${(props) => (props.scroll > 100 ? 0 : 1)};
    transition: 0.3s;
`;
const PattyText = styled.div`
    position: absolute;
    width: 100%;
    color: rgba(0, 0, 0, 0.3);
    font-size: 20vw;
    font-weight: 900;
    opacity: ${(props) => (props.scroll > 100 ? 1 : 0)};
    transition: 0.3s;
    text-transform: uppercase;
`;
const WrabBurgerImg = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
`;
const BurgerImg = styled.div`
    position: absolute;
    display: inline-block;
    height: 150px;
    width: 450px;
    filter: ${(props) => (props.scroll > 100 ? "blur(2px)" : "blur(0px)")};
    transition: 1s;
    &:nth-child(1) {
        top: ${(props) => (props.scroll > 100 ? "5%" : "25%")};
        z-index: 100;
    }
    &:nth-child(2) {
        top: ${(props) => (props.scroll > 100 ? "18%" : "35%")};
        z-index: 90;
    }
    &:nth-child(3) {
        top: ${(props) => (props.scroll > 100 ? "25%" : "40%")};
        z-index: 80;
    }
    &:nth-child(4) {
        top: ${(props) => (props.scroll > 100 ? "30%" : "42%")};
        z-index: 70;
    }
    &:nth-child(5) {
        top: ${(props) => (props.scroll > 100 ? "35%" : "45%")};
        z-index: 60;
    }
    &:nth-child(6) {
        top: ${(props) => (props.scroll > 100 ? "45%" : "51%")};
        z-index: 50;
    }
    &:nth-child(7) {
        top: ${(props) => (props.scroll > 100 ? "58%" : "54%")};
        transform: ${(props) =>
            props.scroll > 100 ? "scale(1.3)" : "scale(1);"};
        filter: blur(0px);
        z-index: 40;
    }
    &:nth-child(8) {
        top: ${(props) => (props.scroll > 100 ? "75%" : "62%")};
        z-index: 30;
    }
`;
export default App;
