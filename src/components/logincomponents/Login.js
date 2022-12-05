import axios from "axios";
import { useEffect, useState } from "react";
import { getUserData } from "./LoginModule";

export default function Login() {
    useEffect(() => {
        getUserData();
    }, []);
    const [data, setData] = useState();
    const [userData, setUserData] = useState();
    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const { username, password } = input;

    const getAPI = async () => {
        await axios.post("http://120.142.105.189:5080/user/login", {
            user_id: username,
            user_pw: password
        }).then((res) => {
            setData(res.data);
            localStorage.setItem("jwttoken", res.data.token.token);
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
        getAPI();
        console.log("alert");
        // setInput({
        //     username: "",
        //     password: ""
        // });
    }

    const onTokenAuth = async () => {
        await axios.get(`http://120.142.105.189:5080/test/token/${username}`, {
            headers: {
                // token: data.token.token
                token: localStorage.getItem("jwttoken")
            }
        }).then((res) => {
            const license = document.querySelector(".license");
            license.innerHTML = res.data.license;
            console.log(res.data);
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="username"
                    value={input.username}
                    onChange={onInputChange} />
                <input
                    name="password"
                    placeholder="password"
                    value={input.password}
                    onChange={onInputChange} />
                <input type="submit" />
            </form>
            <h2>로그인 정보</h2>
            <h3 className="license">라이센스</h3>
            {data &&
                <>
                    <ul>
                        <li>유저 아이디 : {data.login.user_id}</li>
                        <li>유저 비밀번호 : {data.login.user_pw}</li>
                        <li>유저 이메일 : {data.login.user_email}</li>
                        <li>유저 학번 : {data.login.user_student_number}</li>
                        <li>유저 이름 : {data.login.user_name}</li>
                        <li>유저 핸드폰 번호 : {data.login.user_phone_number}</li>
                        <li>유저 가입 날짜 : {data.login.user_created_at}</li>
                        <li>유저 라이센스 : {data.login.user_license}</li>
                        <li>유저 학과 아이디 : {data.login.department_id}</li>
                        <li>유저 토큰 : {data.token.token}</li>
                    </ul>
                </>
            }
            <button onClick={onTokenAuth}>토큰 인증하기</button>
        </div>
    );
}