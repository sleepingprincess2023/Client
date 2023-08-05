import { styled } from "styled-components";

export const MainWrap = styled.div`
  width: 480px;
  height: 100vh;
  background: #2eb2fb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainWrapLogo = styled.img`
  width: 200px;
  height: auto;
`;

export const RegistWrap = styled.div`
  width: 480px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapTitle = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: 800;
`;

export const MainWrapBtn = styled.button`
  width: 120px;
  height: 50px;
  background: white;
  border-radius: 20px;
  margin: 12px 12px;
  border: none;
  font-size: 20px;
`;
