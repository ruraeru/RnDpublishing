import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { SiMicrosoftexcel } from "react-icons/si";
import DetailData from "../DetailData";
import ReportData from "../ReportData";
import "./productList.scss";

{/* <DetailData />
                    <ReportData /> */}

const showDiv = (e) => {
    console.log(e.target);
}

const DataList = () => {
    return (
        <>
            {/* 클릭시 div 확장되면서 
         ReportData나 DetailData 
         컴포넌트 호출 구현해야함*/}
            <tr onClick={e => {
                showDiv(e);
            }}>
                <td>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" />
                </td>
                <td>교육용</td>
                <td>소프트웨어콘텐츠 과</td>
                <td>스마트 패드</td>
                <td>9115</td>
                <td>대여가능</td>
            </tr>
        </>
    );
}


//refac plz
const ListNav = styled.div`
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   ul {
    display: inline-flex;
    list-style: none;
    li {
      margin-left: 24px; 
    }
   }
`;

export default function ProductList() {
    return (
        <div className="productList">
            <div className="header">
                <p>
                    <b>대여 목록</b>
                </p>
                <p>대여 로그</p>
                <div className="searchBar">
                    <input placeholder="검색어를 입력하세요" />
                    <BiSearchAlt2 size="17px" color="#9785CB" />
                </div>
                <div className="excelExport">
                    <SiMicrosoftexcel size="27px" color="#20744A" />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" id="checkbox" />
                            <label
                                style={{
                                    border: "3px solid #F5F5F5"
                                }}
                                htmlFor="checkbox"
                            />
                        </th>
                        <th>구분</th>
                        <th>관리부서</th>
                        <th>기자재명</th>
                        <th>품목 코드</th>
                        <th>기자재 상태</th>
                    </tr>
                </thead>
                <tbody>
                    <DataList />
                    <DataList />
                    <DetailData />
                    <ReportData />
                    <DataList />
                    <tr style={{
                        backgroundColor: "#D9D9D9"
                    }}>
                        <td>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" />
                        </td>
                        <td>교육용</td>
                        <td>소프트웨어콘텐츠 과</td>
                        <td>스마트 패드</td>
                        <td>9115</td>
                        <td style={{
                            color: "#E03333"
                        }}>대여불가</td>
                    </tr>
                </tbody>
            </table>
            <ListNav>
                <ul>
                    <li>&lt;</li>
                    <li>
                        <b>1</b>
                    </li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>&gt;</li>
                </ul>
            </ListNav>
        </div>
    );
}

