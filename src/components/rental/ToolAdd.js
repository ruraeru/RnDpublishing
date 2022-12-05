import styled from "styled-components";

export default function ToolAdd() {
    return (
        <RentalWrap>
            <h3>기자재 추가</h3>
            <div>
                <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1029844824592537-0153a154-ac97-4fe2-8180-75d1dcfb6d7c.jpg"
                    alt="productImg" />
                <div>
                    <p>이미지 파일 불러오기</p>
                    <input type="file" />
                    <p>기자재 명칭</p>
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

   img {
    width: 128px;
    height: 207px;
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
        display: flex;
        flex-direction: column;
    }
   }
`;