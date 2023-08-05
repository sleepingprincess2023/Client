import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import * as _ from "../../common/PageWrapStyle";
import * as _M from "./style";
import 'leaflet/dist/leaflet.css';

import myIconImg from '../../assets/my-icon.png'; // 커스텀 아이콘 이미지 경로

// 커스텀 아이콘 객체 생성
const myIcon = L.icon({
  iconUrl: myIconImg,
  iconSize: [25, 41], // 아이콘 크기
  iconAnchor: [12, 41], // 아이콘의 "바닥" 위치
  popupAnchor: [0, -41] // 팝업이 열릴 위치
});

function MapInitializer() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

const Map = () => {
  // 서울시의 대략적인 경계
  const bounds = [
    [37.425, 126.764],
    [37.701, 127.183],
  ];

  // 현재 위치의 상태를 관리합니다.
  const [currentLocation, setCurrentLocation] = useState(null);

  // 컴포넌트가 마운트될 때 현재 위치를 가져옵니다.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  // 현재 위치가 설정되지 않았다면 로딩 표시 (또는 다른 플레이스홀더 컴포넌트)
  if (!currentLocation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <_.PageWrap>
        <_.PageContainer>
          <_M.MapWrap>
            <_M.MapHeaderTitle>Eyes Up</_M.MapHeaderTitle>
            <_M.GoogleMapWrap>
              <MapContainer
                center={currentLocation} // 현재 위치를 중심으로 설정
                zoom={23} // 확대된 상태로 시작
                style={{ height: '100%', width: '100%' }}
                minZoom={10}
                maxZoom={18}
                maxBounds={bounds}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={currentLocation} icon={myIcon} /> {/* 커스텀 아이콘 적용 */}
                <MapInitializer />
              </MapContainer>
            </_M.GoogleMapWrap>
            <_M.MapFooterWrap />
          </_M.MapWrap>
        </_.PageContainer>
      </_.PageWrap>
    </>
  );
};

export default Map;
