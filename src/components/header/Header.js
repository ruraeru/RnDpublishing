import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
    return (
        <>
            <div className="headerWrap">
                <div className="logo">
                    <Link to="/">
                        <p>로고</p>
                    </Link>
                </div>
                <div className="headerContents">
                    <p>
                        <b>2022661108</b> 교번
                    </p>
                    <p>
                        <b>홍길동</b> 님
                    </p>
                    <p>
                        로그아웃
                    </p>
                    <p>대여 목록 보기</p>
                    <p>대여 내역</p>
                </div>
            </div>
        </>
    );
}