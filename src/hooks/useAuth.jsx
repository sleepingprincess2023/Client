import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../axios";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [uuid, setUuid] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (access && refresh) {
      setIsLoggedIn(true); // 로그인 성공 시 isLoggedIn을 true로 설정
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleInputName = (e) => {
    setUserName(e.target.value);
  };

  const handleInputId = (e) => {
    setUuid(e.target.value);
  };

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { access, refresh } = await login(uuid, password);
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      // setIsLoggedIn((prev) => !prev); // 로그인 성공 시 isLoggedIn을 true로 설정
      console.log(uuid, isLoggedIn);
      window.location.replace("/face");
    } catch (error) {
      console.log("로그인에 실패했습니다.", error);
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    window.location.replace("/");
  };

  return {
    userName,
    uuid,
    password,
    handleInputId,
    handleInputName,
    handleInputPw,
    handleSubmit,
    handleLogout,
    isLoggedIn,
  };
};
