import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

function Signin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [button, setButton] = useState(true);

    const check = () => {
        if (email.includes("@") && pw.length >= 8) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const submit = () => {
        console.log("hi");
        axios({
            url: "https://pre-onboarding-selection-task.shop/auth/signin",
            method: "POST",
            header: { "Content-Type": "application/json" },
            data: {
                email: email,
                password: pw
            }
        })
            .then((res) => {
                console.log(res.data.access_token);
                localStorage.setItem("access_token", res.data.access_token);
                // navigate("/todo");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Wrap>
            <Header />
            <Title>로그인..</Title>
            <Form>
                <Input
                    data-testid="email-input"
                    placeholder="이메일을 입력하세요.."
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <Input
                    data-testid="password-input"
                    placeholder="비밀번호를 입력하세요.."
                    type="password"
                    pw="pw"
                    onChange={(e) => {
                        setPw(e.target.value);
                        check();
                    }}
                />
                <Submit
                    data-testid="signin-button"
                    onClick={submit}
                    disabled={button}
                >
                    로그인하기..
                </Submit>
            </Form>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

const Title = styled.div`
    margin-top: 120px;
    font-size: 24px;
    text-align: center;
`;

const Form = styled.div`
    width: 30vw;
    margin: 20px auto;
`;

const Input = styled.input`
    width: 30vw;
    padding: 2px;
    margin-bottom: 8px;
`;

const Submit = styled.button`
    width: 30vw;
    padding: 2px 4px;
    border: 1px solid #000;
    border-radius: 3px;
    text-align: center;
    background-color: #e9e9e9;
    cursor: pointer;
`;

export default Signin;
