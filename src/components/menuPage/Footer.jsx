import styled from "styled-components";

const Footer = () => {
    return (
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
    );
};

export default Footer;

const FooterWrapper = styled.footer`
    width: 95%;
    height: 65px;
    background-color: orange;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 900;
    padding: 0 2%;
    // bottom: 0px;
`;
const GitHub = styled.div`
    width: 30px;
    height: 30px;
    // background-color: red;
    background-image: url("./img/github.png");
    background-size: cover;
    opacity: 0.5;
    cursor: pointer;
`;
