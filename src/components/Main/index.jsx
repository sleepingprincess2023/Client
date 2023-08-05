import React from "react";
import * as _ from "../../common/PageWrapStyle";
import * as M from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <_.PageWrap>
        <_.PageContainer>
          <M.MainWrap>
            <M.MainWrapLogo src={logo} />
            <M.MainWrapTitle>Eyes Up</M.MainWrapTitle>
            <M.RegistWrap>
              <Link to="/login">
                <M.MainWrapBtn>로그인</M.MainWrapBtn>
              </Link>
              <Link to="/signup">
                <M.MainWrapBtn>회원가입</M.MainWrapBtn>
              </Link>
            </M.RegistWrap>
          </M.MainWrap>
        </_.PageContainer>
      </_.PageWrap>
    </>
  );
};

export default Main;
