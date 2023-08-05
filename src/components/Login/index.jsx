import React from "react";
import * as _ from "../../common/PageWrapStyle";
import * as L from "./style";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const {
    user_name,
    uuid,
    password,
    handleInputName,
    handleInputId,
    handleInputPw,
    handleSubmit,
  } = useAuth();
  return (
    <>
      <_.PageWrap>
        <_.PageContainer>
          <L.LoginWrap>
            <L.LoginTitle>아이즈업 정보입력</L.LoginTitle>
            <L.LoginInputWrap onSubmit={handleSubmit}>
              <L.LoginInput
                placeholder="이름"
                type="text"
                name="user_name"
                value={user_name}
                onChange={handleInputName}
              />
              <L.LoginInput
                placeholder="아이디"
                type="text"
                name="uuid"
                value={uuid}
                onChange={handleInputId}
              />
              <L.LoginInput
                placeholder="비밀번호"
                type="password"
                name="password"
                value={password}
                onChange={handleInputPw}
              />
            </L.LoginInputWrap>
            <L.LoginButton>완료</L.LoginButton>
          </L.LoginWrap>
        </_.PageContainer>
      </_.PageWrap>
    </>
  );
};

export default Login;
