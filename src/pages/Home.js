import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header/header";
import ProductList from "../components/productList/productList";
import Profile from "../components/profile/profile";

export default function Home({ children }) {
    const path = useLocation().pathname;
    console.log(path);
    return (
        <>
            <Header />
            <div style={{ display: "flex" }}>
                <Profile />
                <ContentsWrap>
                    {/* <ProductList /> */}
                    {children}
                </ContentsWrap>
            </div>
        </>
    );
}
const ContentsWrap = styled.div`
   width: 1196px;
   min-height: 804px;
   
   text-align: center;
   font-weight: 500;
   
   border: 2px solid #c6c1d1;
   border-radius: 16px;
   
   margin-top: 24px;
   padding: 20px;
`;