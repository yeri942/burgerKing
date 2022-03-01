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
    width: 96%;
    height: 10%;
    background-color: orange;
    display: flex;
    position: relative;
    transform: translateY(-100%);
    align-items: center;
    justify-content: space-between;
    font-family: sans-serif;
    font-size: 1.5vh;
    font-weight: 900;
    padding: 0 2%;
`;
const GitHub = styled.div`
    width: 3.5vh;
    height: 3.5vh;
    background-image: url("./img/github.png");
    background-size: cover;
    opacity: 0.5;
    cursor: pointer;
`;
