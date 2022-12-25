import { useLocation } from "react-router-dom";
import adminImg from "../../images/admin.svg";
import enterImg from "../../images/enterprice.svg";
import stuImg from "../../images/student.svg";

export default function userType() {
    // const pathname = useLocation().pathname;

    const onUserType = (e) => {
        const userType = e.target.name;
        // window.location.href = `${pathname}/${userType}`;
    }
    return (
        <div id="userType">
            <img name="student" onClick={onUserType} src={stuImg} alt="학부생" />
            <img name="admin" onClick={onUserType} src={adminImg} alt="관리자" />
            <img name="enterprice" onClick={onUserType} src={enterImg} alt="산업체" />
        </div>
    );
}