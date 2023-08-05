import React from "react";
import * as _ from "../../common/PageWrapStyle";
import * as _M from "./style";

const Map = () => {
  return (
    <>
      <_.PageWrap>
        <_.PageContainer>
          <_M.MapWrap>
            <_M.MapHeaderTitle>Eyes Up</_M.MapHeaderTitle>
            <_M.GoogleMapWrap></_M.GoogleMapWrap>
            <_M.MapFooterWrap />
          </_M.MapWrap>
        </_.PageContainer>
      </_.PageWrap>
    </>
  );
};

export default Map;
