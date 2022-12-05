import axios from "axios";
import { useState } from "react";

const getUserData = async () => {
    await axios.post("http://120.142.105.189:5080/user/login", {
        user_id: "student",
        user_pw: "1234"
    }).then(res => console.log(res));
};

export { getUserData };