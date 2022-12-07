import styled from "styled-components";
import { SiMicrosoftexcel } from "react-icons/si";

export default function ToolAdd() {
    return (
        <RentalWrap>
            <h2>기자재 추가</h2>
            <div>
                <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1029844824592537-0153a154-ac97-4fe2-8180-75d1dcfb6d7c.jpg"
                    alt="productImg" />
                <div>
                    <p>이미지 파일 불러오기</p>
                    <input id="file" type="file" />
                    <p>기자재 명칭</p>
                    <input />
                    <p>
                        <SiMicrosoftexcel size="32" color="20744A" />
                    </p>
                    <input />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>자산번호</th>
                        <th>관리부서</th>
                        <th>구분</th>
                        <th>품목코드</th>
                        <th>규격</th>
                        <th>구입일자</th>
                        <th>구입구분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2017021402226</td>
                        <td>소프트웨어콘텐츠 과</td>
                        <td>교육용</td>
                        <td>9115</td>
                        <td>LG G패드 3 8.0 Wi-Fi 32G</td>
                        <td>2017년 2월 14일</td>
                        <td>교비(등록금)</td>
                    </tr>
                </tbody>
            </table>
        </RentalWrap>
    );
}

const RentalWrap = styled.div`
   display: flex;
   flex-direction: column;
   h2 {
    text-align: left;
   }

   img {
    width: 160px;
    height: 207px;

    margin-right: 16px;
    margin-bottom: 16px;

    border: 1px solid black;
    border-radius: 8px;
   }

   input {
    width: 480px;
    height: 36px;

    border: 1px solid #C6C1D1;
    border-radius: 8px;

    background-color: #f5f5f5;
   }
   div {
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        height: 206px;
        p {
            width: 100%;
            text-align: left;
            margin: 0;
            margin-bottom: 6px;
        }
        display: flex;
        flex-direction: column;
    }
   }

   table {
    border-collapse: collapse;
    thead {
        height: 36px;
    }
    tbody {
        height: 48px;
    }

    tr {
        th {
            color: #fafafa;
            background-color: #676767;
        }
        td {
            background-color: #f5f5f5;
        }
    }
   }
   
`;