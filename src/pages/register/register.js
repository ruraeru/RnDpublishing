import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminImg from "../../images/admin.svg";
import EnterImg from "../../images/enterprice.svg";
import StuImg from "../../images/student.svg";
import "./register.scss";

export default function Register() {
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    // const a = new Date();
    // console.log(a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());
    const [registerData, setRegisterData] = useState({
        user_id: "",
        user_pw: "",
        user_email: "",
        user_student_number: "",
        user_name: "",
        user_phone_number: "",
        // user_created_at: new Date(),
        user_license: "",
        department_id: ""
    });
    const {
        user_id,
        user_pw,
        user_email,
        user_student_number,
        user_name,
        user_phone_number,
        // user_created_at,
        user_license,
        department_id
    } = registerData;

    const onRegisterInput = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    }
    const onSignUp = async () => {
        console.log(registerData);
        await axios.post("http://120.142.105.189:5080/user/signUp", {
            user_id: user_id,
            user_pw: user_pw,
            user_email: user_email,
            user_student_number: user_student_number,
            user_name: user_name,
            user_phone_number: user_phone_number,
            // user_created_at: new Date(),
            user_license: parseInt(user_license),
            department_id: parseInt(department_id)
        }).then(res => {
            console.log(res.data.suc);
        }).catch(err => {
            console.log(err);
        });
    }
    useEffect(() => {
        const img = document.querySelectorAll("img");
    }, []);

    const onUserType = (e) => {
        const userType = e.target.name;
        navigate(`${pathname}/${userType}`, { replace: false });
    }
    return (
        <div className="loginWrap" >
            <div className="center">
                <h1>회원가입</h1>
                <div id="userType">
                    <img
                        name="student"
                        onClick={onUserType}
                        src={StuImg}
                        alt="student"
                    />
                    <img
                        name="admin"
                        onClick={onUserType}
                        src={AdminImg}
                        alt="admin"
                        style={{
                            marginLeft: "50px",
                            marginRight: "50px"
                        }}
                    />
                    <img
                        name="enterprice"
                        onClick={onUserType}
                        src={EnterImg}
                        alt="enterprice"
                    />
                </div>
                {/* <div id="univInput">
                    <p>학교</p>
                    <select>
                        <option>학교를 선택해주세요.</option>
                        <option>명지전문대학교</option>
                    </select>
                    <p>학과</p>
                    <select>
                        <option>학과를 선택해주세요.</option>
                        <option>소프트웨어콘텐츠과</option>
                    </select>
                </div> */}
                {/* <form onSubmit={(e) => {
                    e.preventDefault();
                    onSignUp();
                }}>
                    <div>
                        <p>아이디</p>
                        <input
                            name="user_id"
                            value={user_id}
                            onChange={onRegisterInput} />
                        <p>비밀번호</p>
                        <input
                            name="user_pw"
                            value={user_pw}
                            onChange={onRegisterInput} />
                        <p>이메일</p>
                        <input
                            name="user_email"
                            value={user_email}
                            onChange={onRegisterInput} />
                        <p>학번</p>
                        <input
                            name="user_student_number"
                            value={user_student_number}
                            onChange={onRegisterInput} />
                        <p>이름</p>
                        <input
                            name="user_name"
                            value={user_name}
                            onChange={onRegisterInput} />
                        <p>전화번호</p>
                        <input
                            name="user_phone_number"
                            value={user_phone_number}
                            onChange={onRegisterInput} />
                        <p>라이센스</p>
                        <input
                            name="user_license"
                            value={user_license}
                            onChange={onRegisterInput} />
                        <p>학과 id</p>
                        <input
                            name="department_id"
                            value={department_id}
                            onChange={onRegisterInput} />
                            </div>
                        </form> */}
                <button type="submit">다음</button>
            </div>
        </div >
    );
}