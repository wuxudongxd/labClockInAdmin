import { Amap, Marker } from "@amap/amap-react";
import { FC, useEffect, useState } from "react";
import "./index.scss";

interface MapProps  {
  onMapChange: (locations: number[]) => void;
}

const Map: FC<MapProps> = ({ onMapChange }) => {
  const [position, setPosition] = useState([103.989433, 30.581442]);
  useEffect(() => {
    onMapChange(position);
  }, [])

  return (
    <div className="map-container">
      <Amap zoom={18} center={[103.989433, 30.581442]}>
        <Marker
          position={position}
          label={{
            content: "Hello, AMap-React!",
            direction: "bottom",
          }}
          draggable
          onDragging={(m) => {
            const lnglat = m.getPosition() as AMap.LngLat;
            onMapChange([lnglat.getLng(), lnglat.getLat()]);
            setPosition([lnglat.getLng(), lnglat.getLat()]);
          }}
        />
      </Amap>
    </div>
  );
};

export default Map;
