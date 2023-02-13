import styled from "styled-components";
import ElmoDancing from "../Images/Elmo-Dancing.webp";

function Main() {
    return (
        <Wrap>
            <ImgWrap>
                <Img src={ElmoDancing} />
            </ImgWrap>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
    width: 20vw;
    margin-top: 120px;
`;
export default Main;
