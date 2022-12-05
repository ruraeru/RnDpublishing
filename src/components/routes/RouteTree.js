import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";

import Login from "./Login";
import Home from "../Home";
import ProductList from "../productList/ProductList";
import ToolAdd from "../rental/ToolAdd";

export default function RouteTree() {
    const [login, setLogin] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<>
                    <h1>존재하지 않는 페이지입니다.</h1>
                    <Link to="/">홈으로 가기</Link>
                </>} />
                <Route path="/" element={login ? <Home>
                    <ProductList />
                </Home> : <Login />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/home" element={<Home>
                    <ProductList />
                </Home>} />
                <Route path="/home/rental-list" element={<Home>
                    <ProductList />
                </Home>} />

                <Route path="/rental/add" element={<Home>
                    <ToolAdd />
                </Home>} />
                <Route path="/home/:tool_id" element={<Tool />} />
            </Routes>
        </BrowserRouter>
    );
}

const Tool = () => {
    const { tool_id } = useParams();
    return (
        <h1>
            {tool_id}
        </h1>
    )
}