// import styled from "styled-components"

// export default function Contents() {
//     <Contents>
//         <div className="profile">
//             <div>
//                 <p>
//                     <b>2022661108</b> 교번
//                 </p>
//                 <p>
//                     <b>홍길동</b> 님
//                 </p>
//                 <p>(관리자)</p>
//             </div>
//             <hr />
//             <div className="Navigation">
//                 <a>
//                     <b>대여 목록</b>
//                 </a>
//                 <a>내 대여 내역</a>
//                 <a>회원 정보 수정</a>
//                 <a>기자재 정보 수정</a>
//                 <a>기자재 추가</a>
//             </div>
//             <div className="productDay">
//                 asdasdsa
//             </div>
//         </div>
//         <div className="productList">
//             <div style={{
//                 display: "flex"
//             }}>
//                 <p>대여 목록</p>
//                 <p>대여 로그</p>
//             </div>
//             <table>
//                 <thead>
//                     <th>
//                         <input type="checkbox" />
//                     </th>
//                     <th>구분</th>
//                     <th>관리부서</th>
//                     <th>기자재명</th>
//                     <th>품목 코드</th>
//                     <th>기자재 상태</th>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>
//                             <input type="checkbox" />
//                         </td>
//                         <td>교육용</td>
//                         <td>소프트웨어콘텐츠 과</td>
//                         <td>스마트 패드</td>
//                         <td>9115</td>
//                         <td>대여가능</td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <input type="checkbox" />
//                         </td>
//                         <td>교육용</td>
//                         <td>소프트웨어콘텐츠 과</td>
//                         <td>스마트 패드</td>
//                         <td>9115</td>
//                         <td>대여가능</td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <input type="checkbox" />
//                         </td>
//                         <td>교육용</td>
//                         <td>소프트웨어콘텐츠 과</td>
//                         <td>스마트 패드</td>
//                         <td>9115</td>
//                         <td>대여가능</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </Contents>
// }

// const Contents = styled.div`
//    display: flex;
//    margin-top: 24px;
//    margin-left: 100px;

//   .profile {
//     width: 220px;
//     text-align: center;
//     /* background-color: red; */

//     margin-right: 22px;

//     border-top: 4px solid #676767;

//     .Navigation {
//       display: flex;
//       flex-direction: column;
//       a {
//         margin-bottom: 8px;
//       }
//       border-bottom: 4px solid #676767;
//     }

//     .productDay {
//       background-color: #F5F5F5;
//       height: 458px;
//     }
//    }
//    .productList {
//     width: 1196px;
//     height: 804px;
//     border: 2px solid #C6C1D1;
//     border-radius: 16px;
//     padding: 32px;

//     text-align: center;
//     table {
//       width: 1132px;
//       border-collapse: collapse;
      
//       input[type="checkbox"] {
//         width: 24px;
//         height: 24px;
//         color: #676767;
//         outline: none;
//       }

//       thead {
//         color: #F5F5F5;
//         height: 32px;
//         background-color: #676767;
//       }
//       tr {
//         height: 48px;
//         border-bottom: 2px solid rgba(103, 103, 103, 0.3);
//       }
//       td {
//         width: 80px;
//         height: 24px;
//       }
//     }
//    }
// `;