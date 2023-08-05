import React from "react";
import * as _ from "../../common/PageWrapStyle";
import * as S from "./style";

const SignUp = () => {
  return (
    <>
      <_.PageWrap>
        <_.PageContainer>
          <S.SignupWrap>
            <S.SignupTitle>아이즈업 정보입력</S.SignupTitle>
            <S.SignupInputWrap>
              <S.SignupInput placeholder="이름" />
              <S.SignupInput placeholder="아이디" />
              <S.SignupInput placeholder="비밀번호" />
            </S.SignupInputWrap>
            <S.SignupButton>완료</S.SignupButton>
          </S.SignupWrap>
        </_.PageContainer>
      </_.PageWrap>
    </>
  );
};

export default SignUp;
