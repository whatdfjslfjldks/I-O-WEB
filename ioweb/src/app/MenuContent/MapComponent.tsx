import React from 'react';
import { Layout } from 'antd';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import ConsoleUi from "./ConsoleUi";

export default function MapComponent() {

  return (
    <div>
      <ConsoleUi
        SelectedTitleMenu="console"
        SelectedConsoleMenu="map"
        ConsoleContent={

          <MapContainer center={[39.071333427794826, 117.1100657748982]} zoom={20} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            />
          </MapContainer>

        }

      />
    </div>
  )
}