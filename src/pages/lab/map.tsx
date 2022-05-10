import { Map, Marker } from "@pansy/react-amap";
import { FC, useEffect, useState } from "react";

interface MapProps {
  onMapChange: (locations: location[]) => void;
}

const LabMap: FC<MapProps> = ({ onMapChange }) => {
  const [position, setPosition] = useState([103.989433, 30.581442]);
  useEffect(() => {
    onMapChange([{ longitude: position[0], latitude: position[1] }]);
  }, []);

  return (
    <div className="w-full h-96 relative">
      <Map zoom={18} center={[103.989433, 30.581442]}>
        <div>
          <Marker
            position={[103.989433, 30.581442]}
            draggable={true}
            events={{
              dragging: (m) => setPosition(m.lnglat.pos),
              dragend: (m) => {
                onMapChange([
                  {
                    longitude: m.lnglat.lng,
                    latitude: m.lnglat.lat,
                  },
                ]);
              },
            }}
          />
        </div>
      </Map>
    </div>
  );
};

export default LabMap;
