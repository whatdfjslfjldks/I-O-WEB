import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CustomSider from './CustomSider';
import Title from './Title';

const { Content } = Layout;

export default function MapComponent() {
  // const [leafletInitialized, setLeafletInitialized] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const L = require('leaflet');
  //     delete L.Icon.Default.prototype._getIconUrl;

  //     L.Icon.Default.mergeOptions({
  //       iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  //       iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  //       shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
  //     });

  //     setLeafletInitialized(true);
  //   }
  // }, []);

  // if (!leafletInitialized) {
  //   // Leaflet 尚未初始化完成
  //   return null;
  // }

  return (
    <Layout>
      <CustomSider menu='map' />
      <Layout>
        <div style={{ position: 'relative' }}>
          <Content>
            <div className='show-main'>
              <Title menu='map' />
              <span>
              {typeof window !== 'undefined' && (
                <MapContainer center={[39.071333427794826, 117.1100657748982]} zoom={20} style={{ height: '800px', width: '100%' }}>
                  <TileLayer
                    url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                  />
                </MapContainer>
              )}
              </span>
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
}
