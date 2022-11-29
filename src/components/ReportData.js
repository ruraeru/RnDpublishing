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
        width: 200px;
        height: 160px;
        background-color: rebeccapurple;
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
                font-size: 14px;
            }
            margin-bottom: 20px;
        }
    }
    .select {
        width: 114px;
        height: 32px;
        background-color: #F5F5F5;
        border: 1px solid #C6C1D1;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        color: #E03333;
    }
`;

export default function ReportData() {
    return (
        <Detail className="detailData">
            <td>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" />
            </td>
            <td colSpan="4">
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginTop: "33px",
                    height: "160px",
                    marginBottom: "8px"
                }}>
                    <div>
                        <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1029844824592537-0153a154-ac97-4fe2-8180-75d1dcfb6d7c.jpg"
                            alt="productImg"
                            style={{
                                marginRight: "36px",
                                border: "2px solid black",
                                borderRadius: "8px"
                            }} />
                    </div>
                    <div style={{
                        width: "280px",
                        height: "160px",
                        backgroundColor: "red",
                        marginRight: "24px"
                    }}>
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
                    <div className="RentalUserData">
                        <b>건의 신청</b>
                        <div>
                            <p>건의자 : 홍길동(학부생)</p>
                            <p>건의 일자 : 2022 / 11 / 21</p>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "728px",
                    // height: "170px",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "15px",
                    border: "none",
                    overflow: "auto",
                    marginBottom: "26px"
                }}>
                    <p style={{
                        fontWeight: 700,
                        fontSize: "16px",
                        marginBottom: "-10px",
                        marginLeft: "27px",
                    }}>건의 내용 : </p>
                    <div style={{
                        width: "673px",
                        height: "114px",
                        marginLeft: "27px"
                    }}>
                        <p style={{
                            fontWeight: 400,
                            fontSize: "16px"
                        }}>터치가 안돼요.</p>
                    </div>
                </div>
            </td>
            <td colSpan="2">
                <select className="select">
                    <option>대여 불가</option>
                    <option>대여 가능</option>
                </select>
            </td>
        </Detail >
    );
}

