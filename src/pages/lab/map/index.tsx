import { Amap, Marker } from "@amap/amap-react";
import "./index.scss";

const Map = () => {
  return (
    <div className="map-container">
      <Amap zoom={15} center={[103.989433, 30.581442]}>
        <Marker
          position={[103.989433, 30.581442]}
          label={{
            content: "Hello, AMap-React!",
            direction: "bottom",
          }}
          draggable
        />
      </Amap>
    </div>
  );
};

export default Map;
