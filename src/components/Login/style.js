import { styled } from "styled-components";

export const LoginWrap = styled.div`
  width: 480px;
  height: 100vh;
  background: white;
`;

export const LoginTitle = styled.h1`
  display: block;
  font-size: 25px;
  color: black;
  font-weight: 800;
  margin: 80px 40px;
  float: left;
`;

export const LoginInputWrap = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  width: 400px;
  height: 70px;
  background: #eeeeee;
  border: none;
  border-radius: 20px;
  margin-top: 30px;
`;

export const LoginButton = styled.button`
  width: 400px;
  height: 70px;
  background: #2eb2fb;
  margin-top: 200px;
  border: none;
  border-radius: 50px;
`;
