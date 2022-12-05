import axios from "axios";
import "./main.scss";

export default function Main() {
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
        <div className="mainWrap">
            <h3>회원가입</h3>
            <button onClick={onSignUp}>가입</button>
        </div>
    );
}