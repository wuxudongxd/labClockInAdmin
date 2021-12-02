import { Amap, Marker } from "@amap/amap-react";
import { FC, useEffect, useState } from "react";
import type { location } from "types/index";

interface MapProps {
  onMapChange: (locations: location[]) => void;
}

const Map: FC<MapProps> = ({ onMapChange }) => {
  const [position, setPosition] = useState([103.989433, 30.581442]);
  useEffect(() => {
    onMapChange([{ longitude: position[0], latitude: position[1] }]);
  }, []);

  return (
    <div className="w-full h-96 relative">
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
            onMapChange([
              { longitude: lnglat.getLng(), latitude: lnglat.getLat() },
            ]);
            setPosition([lnglat.getLng(), lnglat.getLat()]);
          }}
        />
      </Amap>
    </div>
  );
};

export default Map;
