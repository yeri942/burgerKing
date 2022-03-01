import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AboutBurger } from "../../state/atoms";

const DetailInfo = () => {
    const aboutBurger = useRecoilValue(AboutBurger);
    const setAboutBurger = useSetRecoilState(AboutBurger);
    const CloseDetailInfo = () => {
        setAboutBurger({
            name: "",
            price: {
                burgerOnly: 0,
                largeSet: 0,
                smallSet: 0,
            },
        });
    };
    return (
        <Detail>
            <CloseButton onClick={CloseDetailInfo}>X</CloseButton>

            <DetailImg src={`../img/burgerImg/${aboutBurger.name}.png`} />
            <div>{aboutBurger.name}</div>
            <Price>
                <div id="cls"> 버거 단품 </div>
                <div>{aboutBurger.price.burgerOnly}</div>
                <div id="cls"> Small Set </div>
                <div>{aboutBurger.price.smallSet}</div>
                <div id="cls"> Large Set </div>
                <div>{aboutBurger.price.largeSet}</div>
            </Price>
        </Detail>
    );
};
export default DetailInfo;

const Detail = styled.div`
    right: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #51231495;
    color: black;
    width: 60vh;
    transition-duration: 0.5s;
    font-size: 2.7vh;
    font-weight: 900;
    @media (max-width: 1025px) {
        padding: 30px 0;
        border-left: none;
        border-bottom: 2px solid #51231495;
        width: 100%;
    }
`;
const CloseButton = styled.button`
    font-size: 3.5vh;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 3% 0 3% 90%;
`;
const DetailImg = styled.img`
    width: 70%;
    object-fit: cover;
    @media (max-width: 480px) {
        width: 70%;
    }
`;
const Price = styled.div`
    width: 100%;
    padding: 3% 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    & > #cls {
        border-bottom: 1px solid black;
        margin-top: 2%;
    }
`;
