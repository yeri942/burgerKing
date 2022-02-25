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
            {aboutBurger.name}
            <div>버거 단품</div>
            <div>{aboutBurger.price.burgerOnly}</div>
            <div>Small Set</div>
            <div>{aboutBurger.price.smallSet}</div>
            <div>Large Set</div>
            <div>{aboutBurger.price.largeSet}</div>
        </Detail>
    );
};
export default DetailInfo;

const Detail = styled.div`
    // margin-top: 100px;
    // position: fixed;
    right: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    width: 500px;
    height: 100%;
    min-height: 100%;
    // padding: 0 0 65px 0;
    transition-duration: 0.5s;
`;
const CloseButton = styled.button`
    position: absolute;
    right: 30px;
    top: 130px;
    font-size: 25px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
const DetailImg = styled.img`
    width: 350px;
    object-fit: cover;
`;
