import React, { useState, useEffect, useCallback, useMemo } from "react";
import DemoView from "../DemoView";
import {
  Marker as AmapMarker,
  Polyline as AmapPolyline,
  loadPlugins,
} from "@amap/amap-react";
import { Form, Input, Select } from "antd";
import useBaseUrl from "@docusaurus/useBaseUrl";

import PATH from "../../static/data/path.json";

const anchors = [
  "top-left",
  "top-center",
  "top-right",
  "middle-left",
  "center",
  "middle-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const DY = PATH[1][1] - PATH[0][1];
const DX = PATH[1][0] - PATH[0][0];
const START_ANGLE = (Math.atan2(DY, DX) * 180) / Math.PI;

const ExampleMarker = () => {
  const MARKER_ICON = useBaseUrl("img/marker-1.svg");
  const CAR_ICON = useBaseUrl("img/car.png");

  const [position, setPosition] = useState([116.473571, 39.993083]);
  const [anchor, setAnchor] = useState("center");

  // const carRef = useRef(undefined);
  const [car, setCar] = useState({
    pos: [...PATH[0]],
    angle: START_ANGLE,
    icon: {
      image: CAR_ICON,
      imageSize: [26, 50],
    },
    offset: [-13, -25],
  });
  const carRef = useReactiveRef();

  useEffect(() => {
    const $car = carRef.current;
    if ($car) {
      const run = async () => {
        await loadPlugins("AMap.MoveAnimation");
        $car.moveAlong(PATH, {
          speed: 2000,
          circlable: true,
          autoRotation: true,
        });
      };
      run();
    }
  }, [carRef.current]);

  const renderControl = () => {
    return (
      <>
        <Form.Item label="position">
          <Input
            readOnly
            value={position.join(",")}
            style={{ width: "180px" }}
          />
        </Form.Item>
        <Form.Item label="anchor">
          <Select
            value={anchor}
            onChange={(value) => setAnchor(value)}
            style={{ width: "100px" }}
          >
            {anchors.map((anc) => (
              <Select.Option value={anc} key={anc}>
                {anc}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </>
    );
  };

  return (
    <DemoView renderControl={renderControl}>
      <AmapPolyline
        path={PATH}
        strokeWeight={7}
        strokeColor="#32AC2E"
        isOutline
        borderWeight="2"
        outlineColor="#fff"
        showDir
      />

      <AmapMarker
        position={position}
        label={{
          content: "Marker标记带文字，我是可以拖拽的",
          direction: "bottom",
        }}
        draggable
        onDragging={(m) => {
          const lnglat = m.getPosition();
          setPosition([lnglat.getLng(), lnglat.getLat()]);
        }}
      />

      <AmapMarker
        position={[116.478463, 39.999428]}
        offset={[0, 0]}
        anchor={anchor}
        className="custom-marker"
      >
        <div
          style={{
            border: "3px solid #000",
            margin: "0",
            whiteSpace: "nowrap",
            padding: "0 10px",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        >
          自定义DOM内容的Marker
        </div>
        <div>多个元素也OK啦</div>
      </AmapMarker>

      <AmapMarker
        position={[116.464258, 39.999067]}
        offset={[-22, -40]}
        label={{
          content: "使用自定义Icon的Marker",
          direction: "bottom",
        }}
        icon={MARKER_ICON}
      />

      <AmapMarker
        ref={carRef}
        position={car.pos}
        angle={car.angle}
        icon={car.icon}
        offset={car.offset}
        onMoving={(car, e) => {
          const p = car.getPosition();
          const a = car.getAngle();
          setCar({
            ...car,
            pos: [p.getLng(), p.getLat()],
            angle: a,
          });
        }}
      />
    </DemoView>
  );
};

export default ExampleMarker;

function useReactiveRef(initialValue = undefined) {
  const update = useForceUpdate();

  const ref = useMemo(() => {
    let val = initialValue;
    return {
      get current() {
        return val;
      },
      set current(value) {
        if (value) {
          val = value;
          update();
        }
      },
    };
  }, []);

  return ref;
}

function useForceUpdate() {
  const [, setState] = useState(0);
  return useCallback(() => setState((s) => s + 1), []);
}
