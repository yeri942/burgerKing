import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

function App() {
    const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
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
            <Wrab>
                <WrabSquare>
                    <Square
                        style={{
                            background:
                                "center / cover no-repeat url(./img/topburn.png)",
                        }}
                        scroll={ScrollY}
                    ></Square>
                    <Square
                        style={{
                            background:
                                "center / cover no-repeat url(./img/lettuce.png)",
                        }}
                        scroll={ScrollY}
                    ></Square>
                    <Square
                        style={{
                            background:
                                "center / cover no-repeat url(./img/onion.png)",
                        }}
                        scroll={ScrollY}
                    ></Square>
                    <Square
                        style={{
                            background:
                                "center / cover no-repeat url(./img/pickle.png)",
                        }}
                        scroll={ScrollY}
                    ></Square>
                    <Square
                        style={{
                            background:
                                "center / cover no-repeat url(./img/cheese.png)",
                        }}
                        scroll={ScrollY}
                    ></Square>
                    <Square
                        style={{
                            background:
                                "center / cover no-repeat url(./img/patty.png)",
                        }}
                        scroll={ScrollY}
                    ></Square>
                    <Square
                        style={{
                            background:
                                "center / cover no-repeat url(./img/bottomburn.png)",
                        }}
                        scroll={ScrollY}
                    ></Square>
                </WrabSquare>
                <BurgerText>Beef Burger</BurgerText>
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
    background-color: orange;
`;
const BurgerText = styled.div`
    position: fixed;
    z-index: 100;
`;
const WrabSquare = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100%;
`;
const Square = styled.div`
    position: absolute;
    display: inline-block;
    height: 150px;
    width: 450px;
    transition: 1s;
    &:nth-child(1) {
        top: ${(props) => (props.scroll > 100 ? "5%" : "30%")};
        z-index: 100;
    }
    &:nth-child(2) {
        top: ${(props) => (props.scroll > 100 ? "20%" : "40%")};
        z-index: 90;
    }
    &:nth-child(3) {
        top: ${(props) => (props.scroll > 100 ? "30%" : "45%")};
        z-index: 80;
    }
    &:nth-child(4) {
        top: ${(props) => (props.scroll > 100 ? "40%" : "48%")};
        z-index: 70;
    }
    &:nth-child(5) {
        top: ${(props) => (props.scroll > 100 ? "50%" : "50%")};
        z-index: 60;
    }
    &:nth-child(6) {
        top: ${(props) => (props.scroll > 100 ? "60%" : "52%")};
        z-index: 50;
    }
    &:nth-child(7) {
        top: ${(props) => (props.scroll > 100 ? "75%" : "60%")};
        z-index: 40;
    }
`;
export default App;
