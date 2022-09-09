import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export const DesktopChart = () => {
  // Preparing the chart data
  const chartData = [
    {
      label: "PHP",
      value: "290",
    },
    {
      label: "C++",
      value: "260",
    },
    {
      label: "JS",
      value: "180",
    },
    {
      label: "Swift",
      value: "140",
    },
    {
      label: "TCS",
      value: "115",
    },
    {
      label: "Python",
      value: "100",
    },
    {
      label: "Ruby",
      value: "30",
    },
    {
      label: "Angular",
      value: "30",
    },
  ];

  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "90%", // Width of the chart
    height: "40%", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "The most used Dev-language in real time !", // Set the chart caption
        subCaption: "", // Set the chart subcaption
        xAxisName: "Language", // Set the x-axis name
        yAxisName: "NB. of topics (MMbbl)", // Set the y-axis name
        numberSuffix: "NB",
        theme: "candy", // Set the theme for your chart
        bgColor: "#e0ded8",
        showBorder: "0",
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};
