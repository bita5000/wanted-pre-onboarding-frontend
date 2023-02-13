import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
    };

    const goToSignin = () => {
        if (localStorage.getItem("access_token")) {
            navigate("/todo");
        } else {
            navigate("/signin");
        }
    };
    const goToSignup = () => {
        if (localStorage.getItem("access_token")) {
            navigate("/todo");
        } else {
            navigate("/signup");
        }
    };
    return (
        <div>
            <HeaderWrap>
                <HeaderTitle onClick={goToMain}>todo</HeaderTitle>
                <HeaderButtonWrap>
                    <WhiteButton onClick={goToSignin}>Signin</WhiteButton>
                    <BlackButton onClick={goToSignup}>Signup</BlackButton>
                </HeaderButtonWrap>
            </HeaderWrap>
        </div>
    );
}

const HeaderWrap = styled.div`
    width: 80vw;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
`;

const HeaderButtonWrap = styled.div`
    display: flex;
`;

const WhiteButton = styled.div`
    font-size: 16px;
    padding: 2px 8px;
    border: 1px solid #000;
    border-radius: 3px;
    margin-right: 8px;
    cursor: pointer;
`;

const BlackButton = styled.div`
    font-size: 16px;
    padding: 2px 8px;
    background-color: #000;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
`;

export default Header;
