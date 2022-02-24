import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { AboutBurger } from "../../state/atoms";

const DetailInfo = () => {
    const aboutBurger = useRecoilValue(AboutBurger);

    return (
        <Detail>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    width: 500px;
    height: 100%;
`;

const DetailImg = styled.img`
    width: 350px;
    object-fit: cover;
`;
