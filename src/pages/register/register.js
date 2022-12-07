import axios from "axios";
import adminImg from "../../images/admin.png";
import enterImg from "../../images/enterprice.png";
import stuImg from "../../images/student.png";
import "./register.scss";

export default function Register() {
    const onSignUp = async () => {
        await axios.post("http://120.142.105.189:5080/user/signUp", {
            user_id: "taewoo",
            user_pw: "1234",
            user_email: "taewoo",
            user_student_number: "taewoo",
            user_name: "taweoo",
            user_phone_number: "taewoo",
            user_created_at: new Date(),
            user_license: 3,
            department_id: 1
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div className="loginWrap" >
            <div className="center">
                <h1>회원가입</h1>
                {/* <div id="userType">
                    <img src={stuImg} alt="학부생" />
                    <img src={adminImg} alt="관리자" />
                    <img src={enterImg} alt="산업체" />
                </div> */}
                <div id="univInput">
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
                </div>
                <button type="submit">다음</button>
            </div>
        </div >
    );
}