import styled from "styled-components";

const Detail = styled.tr`
   color: #676767;
   .name_state {
    display: flex;
    align-items: center;
    font-weight: 700;
    b {
        color: #161616;
        font-size: 20px;
        line-height: 26px;
        margin-right: 10px;
    }
    }
    .productCode {
        font-weight: 700;
        font-size: 16px;
        line-height: 20.8px;
        p {
            margin-bottom: -15px;
        }
        margin-bottom: 18px;
    }
    .detail {
        font-size: 14px;
        font-weight: 400;
        line-height: 18.2px;
        p {
            margin-bottom: -15px;
        }
    }
    .RentalUserData {
        b {
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            letter-spacing: -0.5%;
            color: #161616;
        }
        div {
            p {
                margin-bottom: -10px;
                font-weight: 700;
                font-size: 12px;
            }
            margin-bottom: 40px;
        }

    }
`;

export default function DetailData() {
    return (
        <Detail className="detailData">
            <td>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" />
            </td>
            <td style={{
                color: "#161616"
            }}>교육용</td>
            <td>
                <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1029844824592537-0153a154-ac97-4fe2-8180-75d1dcfb6d7c.jpg"
                    alt="productImg" />
            </td>
            <td>
                <div>
                    <div className="name_state">
                        <b>
                            스마트 패드
                        </b>
                        <label>
                            대여 중
                        </label>
                    </div>
                    <div className="productCode">
                        <p>품목 코드 : 9115</p>
                        <p>자산 번호 : 2017021402226</p>
                    </div>
                    <div className="detail">
                        <p>구입 구분 : 교비(등록금)</p>
                        <p>구입 일자 : 2017년 2월 14일</p>
                        <p>물품 규격 : LG G패드 3 8.0 Wi-Fi 32G</p>
                    </div>
                </div>
            </td>
            <td colSpan="2">
                <div className="RentalUserData">
                    <b>대여 정보</b>
                    <div>
                        <p>대여자: 홍길동(학부생)</p>
                        <p>대여 기간 : 2022 / 11 / 16 ~ 2022 / 11 /30</p>
                        <p>(남은 기간 : 14일)</p>
                    </div>
                </div>
            </td>
        </Detail >
    );
}

