import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./profile.scss";

export default function Profile() {
    return (
        <div className="profileWrap">
            <div className="userInfo">
                <div>
                    <p>
                        <b>2022661108</b> 교번
                    </p>
                    <p>
                        <b>홍길동</b> 님
                    </p>
                    <p>(관리자)</p>
                </div>
                <hr />
                <div className="navigation">
                    <Link to="/home/rental-list">
                        대여 목록
                    </Link>
                    <Link to="/home/rental-history">
                        내 대여 내역
                    </Link>
                    <Link to="/user/change-info">
                        회원 정보 수정
                    </Link>
                    <Link to="/rental/change">
                        기자재 정보 수정
                    </Link>
                    <Link to="/rental/add">
                        기자재 추가
                    </Link>
                </div>
                <div className="rentalList">
                    <p>내 대여 목록</p>
                    <div className="rentalItem">
                        <h3>D - 1</h3>
                        <p>스마트 패드</p>
                        <p>품목 코드 : 9115</p>
                    </div>
                    <div className="rentalItem">
                        <h3>D - 1</h3>
                        <p>스마트 패드</p>
                        <p>품목 코드 : 9115</p>
                    </div>
                </div>
            </div>
        </div>
    );
}