import ReactECharts from "echarts-for-react";

const Analysis = () => {
  const options = {
    title: {
      text: "每周签到数据变化图",
    },
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [82, 93, 90, 93, 129, 133, 132],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default Analysis;
