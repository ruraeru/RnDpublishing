import { Link } from "react-router-dom";
import "./Login.scss";

export default function LoginMain() {
    return (
        <div className="loginWrap">
            <h1>로그인</h1>
            <form style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <p>아이디</p>
                <input
                    type="text"
                    placeholder="학번 혹은 아이디를 입력해주세요."
                />
                <p>비밀번호</p>
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                />
                <button type="submit">로그인</button>
            </form>
            <ul>
                <li>
                    <Link to="home">아이디 찾기</Link>
                </li>
                <li>
                    <Link to="home">비밀번호 변경</Link>
                </li>
                <li>
                    <Link to="home">회원가입</Link>
                </li>
            </ul>
        </div>
    );
}