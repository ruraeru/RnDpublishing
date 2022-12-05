import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import ProductList from "./components/productList/ProductList";

export default function App() {
  return (
    <div style={{
      // marginLeft: "240px",
      // marginTop: "100px"
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Header>
        <div className="logo">
          <p>로고</p>
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
      </Header>
      <Contents>
        <div className="profile">
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
          <div className="Navigation">
            <a>
              <b>대여 목록</b>
            </a>
            <a>내 대여 내역</a>
            <a>회원 정보 수정</a>
            <a>기자재 정보 수정</a>
            <a>기자재 추가</a>
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
        <ProductList />
        {/* <div className="productList">
          <h3>기자재 추가</h3>
          <img src="https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1029844824592537-0153a154-ac97-4fe2-8180-75d1dcfb6d7c.jpg"
            alt="productImg" />
        </div> */}
      </Contents>
    </div>
  )
}



const Contents = styled.div`
   display: flex;
   margin-top: 24px;
   margin-left: 100px;

  .profile {
    width: 220px;
    text-align: center;
    /* background-color: red; */

    margin-right: 22px;

    border-top: 4px solid #676767;

    .Navigation {
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 8px;
      }
      border-bottom: 4px solid #676767;
    }

    .rentalList {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 220px;
      height: 458px;
    
      background-color: #F5F5F5;

      .rentalItem {
        display: flex;
        align-items: left;
        flex-direction: column;
        h3 {
          margin-bottom: -12px;
        }
        p {
          margin-bottom: -16px;
        }
        
        width: 188px;
        height: 76px;
        
        font-weight: 700;
        font-size: 14px;
        color: #676767;

        text-align: left;

        box-sizing: content-box;
        border: 2px solid rgba(103, 103, 103, 0.3);
        border-radius: 8px;
        
        padding: 8px;
        margin-bottom: 10px;
        background-color: #FFFFFF;
        

      }
    }
   }
   .productList {
    width: 1196px;
    /* height: 804px; */
    border: 2px solid #C6C1D1;
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    font-weight: 500;

    .header {
      display: flex;
      align-items: center;

      margin-bottom: 24px;
      
      p {
        width: 119px;
        height: 24px;
      }

      .searchBar {
        width: 618px;
        height: 40px;
        border-radius: 100px;
        border: 2px solid rgba(198, 193, 209, 0.3);
        background-color: #F5F5F5;
        margin-left: 180px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          border: none;
          background-color: #F5F5F5;
          padding-left: 24px;
        }
        padding-right: 20px;
      }

      .excelExport {
        width: 32px;
        height: 32px;

        margin-left: 24px ;

        border-radius: 8px;
        text-align: center;
        background-color: #F5F5F5;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    table {
      width: 1132px;
      border-collapse: collapse;
      
      input[type="checkbox"] {
        display: none;
      }

      input[type="checkbox"] + label{
        display: inline-block;
        width: 21px;
        height: 21px;
        border: 3px solid #676767;
        border-radius: 3px;
      }

      thead {
        color: #F5F5F5;
        height: 32px;
        background-color: #676767;
        /* display: flex; */
      }
      tbody > tr {
        height: 48px;
        border-bottom: 2px solid rgba(103, 103, 103, 0.3);
      }
      .detailData {
        height: 218px;

        div {
          font-size: 12px;
          text-align: left;
        }

        img {
          width: 160px;
          height: 160px;
        }
      }
      td {
        width: 80px;
        height: 24px;
      }
    }
   }
`;

const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-around;
   
   width: 1500px;
   height: 52px;
   border-radius: 100px;
   margin-left: 100px;
   margin-top: 50px;

   color: #F5F5F5;

   .headerContents {
    display: flex;
    justify-content: flex-end;
    width: 1200px;
    b, p {
      margin-right: 8px;
      margin-left: 8px;
    }
   }
   .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 96px;
    height: 40px;
    border-radius: 100px;
    color: #7739dc;
    background-color: #F5F5F5;
   }
    background-color: #404041;
`;