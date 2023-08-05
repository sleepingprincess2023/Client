import React from "react";
import * as _ from "../../common/PageWrapStyle";
import * as L from "./style";

const Login = () => {
  return (
    <>
      <_.PageWrap>
        <_.PageContainer>
          <L.LoginWrap>
            <L.LoginTitle>아이즈업 정보입력</L.LoginTitle>
            <L.LoginInputWrap>
              <L.LoginInput placeholder="이름" />
              <L.LoginInput placeholder="아이디" />
              <L.LoginInput placeholder="비밀번호" />
            </L.LoginInputWrap>
            <L.LoginButton>완료</L.LoginButton>
          </L.LoginWrap>
        </_.PageContainer>
      </_.PageWrap>
    </>
  );
};

export default Login;
