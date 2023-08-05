import styled from "styled-components";
import nav_footer from "../../assets/under_nav.png";

export const MapWrap = styled.div`
  width: 480px;
  height: 100vh;
  background: white;
  position: fixed;
`;

export const MapHeaderTitle = styled.h3`
  color: #2eb2fb;
  font-weight: 700;
  font-size: 25px;
  margin: 30px 40%;
`;

export const GoogleMapWrap = styled.div`
  width: 480px;
  height: 660px;
  background: #efefef;
`;

export const MapFooterWrap = styled.footer`
  bottom: 0%;
  position: fixed;
  width: 480px;
  height: 50px;
  background-image: url(${nav_footer});
  background-size: cover;
`;
