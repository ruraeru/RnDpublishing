import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

export default function LoginMain() {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [userData, setUserData] = useState();
    const [input, setInput] = useState({
        username: "",
        password: ""
    });
    const { username, password } = input;

    const onUserAuth = async () => {
        await axios.post("http://120.142.105.189:5080/user/login", {
            user_id: username,
            user_pw: password
        }).then((res) => {
            setData(res.data);
            // localStorage.setItem("jwttoken", res.data.token.token);
            navigate("/home");
            console.log(res);
            // onTokenAuth();
        }).catch(e => {
            console.log(e);
        });
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onUserAuth();
    }

    const onTokenAuth = async () => {
        console.log(data);
        await axios.get(`http://120.142.105.189:5080/test/token/${username}`, {
            headers: {
                // token: data.token.token
                token: localStorage.getItem("jwttoken")
            }
        }).then((res) => {
            // const license = document.querySelector(".license");
            // license.innerHTML = res.data.license;
            console.log(res.data);
        });
    }
    return (
        <div className="loginWrap">
            <div className="center">
                <h1>로그인</h1>
                <form
                    onSubmit={onSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <p>아이디</p>
                    <input
                        name="username"
                        placeholder="학번 혹은 아이디를 입력해주세요."
                        value={input.username}
                        onChange={onInputChange} />
                    <p>비밀번호</p>
                    <input
                        name="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={input.password}
                        onChange={onInputChange} />
                    <button type="submit">로그인</button>
                </form>
                <ul>
                    <li>
                        <Link to="/user/findid">아이디 찾기</Link>
                    </li>
                    <li>
                        <Link to="/user/modifypass">비밀번호 변경</Link>
                    </li>
                    <li>
                        <Link to="/user/signup">회원가입</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}