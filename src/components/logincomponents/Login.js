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
            <h2>????????? ??????</h2>
            <h3 className="license">????????????</h3>
            {data &&
                <>
                    <ul>
                        <li>?????? ????????? : {data.login.user_id}</li>
                        <li>?????? ???????????? : {data.login.user_pw}</li>
                        <li>?????? ????????? : {data.login.user_email}</li>
                        <li>?????? ?????? : {data.login.user_student_number}</li>
                        <li>?????? ?????? : {data.login.user_name}</li>
                        <li>?????? ????????? ?????? : {data.login.user_phone_number}</li>
                        <li>?????? ?????? ?????? : {data.login.user_created_at}</li>
                        <li>?????? ???????????? : {data.login.user_license}</li>
                        <li>?????? ?????? ????????? : {data.login.department_id}</li>
                        <li>?????? ?????? : {data.token.token}</li>
                    </ul>
                </>
            }
            <button onClick={onTokenAuth}>?????? ????????????</button>
        </div>
    );
}