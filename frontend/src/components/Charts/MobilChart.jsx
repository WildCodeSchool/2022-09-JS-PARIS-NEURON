// import React from 'react';
// import FusionCharts from "fusioncharts";
// import charts from "fusioncharts/fusioncharts.charts";
// import ReactFC from "react-fusioncharts";
// import ReactFusioncharts from "react-fusioncharts";
// import PowerCharts from "fusioncharts/fusioncharts.powercharts";
// import radar from "fusioncharts/fusioncharts.charts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // Resolves charts dependancy
// charts(FusionCharts, ReactFusioncharts, PowerCharts, radar, FusionTheme);

// export const MobilChart = () => {
//   const chartConfigs = {
//     type: "column2d", // The chart type
//     width: "90%",
//     height: "40%",
//     dataFormat: "json",
//     dataSource: {
//       chart: {
//         caption: "The most used Dev-language in real time !",
//         subCaption: "In MMbbl = one topic",
//         xAxisName: "Language",
//         yAxisName: "NB. of topics (MMbbl)",
//         numberSuffix: "k",
//         theme: "fusion",
//       },
//       data: [
//         {
//           label: "PHP",
//           value: "290",
//         },
//         {
//           label: "C++",
//           value: "260",
//         },
//         {
//           label: "JS",
//           value: "180",
//         },
//         {
//           label: "Swift",
//           value: "140",
//         },
//         {
//           label: "TCS",
//           value: "115",
//         },
//         {
//           label: "Python",
//           value: "100",
//         },
//         {
//           label: "Ruby",
//           value: "30",
//         },
//         {
//           label: "Angular",
//           value: "30",
//         },
//       ],
//     },
//   };

//   return <ReactFC {...chartConfigs} />;
// };

// const chartConfigs = {
//   type: "radar", // The chart type
//   width: "40%", // Width of the chart
//   height: "30%", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       caption: "The most used Dev-language in real time !",    //Set the chart caption
//       subCaption: "In MMbbl = one topic",             //Set the chart subcaption
//       xAxisName: "Language",           //Set the x-axis name
//       yAxisName: "NB. of topics (MMbbl)",  //Set the y-axis name
//       numberSuffix: "K",
//       theme: "fusion"
//     },
//     // Chart Data
//     data: [
//       { label: "PHP", value: "3" },
//       { label: "C++", value: "3" },
//       { label: "JS", value: "4" },
//       { label: "Swift", value: "3" },
//       { label: "TCS", value: "2" },
//       { label: "Python", value: "4" },
//       { label: "Ruby", value: "3" },
//       { label: "Angular", value: "4" }
//     ]
//   }
// };
// return (<ReactFC {...chartConfigs} />);
// }

// import FusionCharts from "fusioncharts";
// import charts from "fusioncharts/fusioncharts.charts";
// import ReactFusioncharts from "react-fusioncharts";

// // Resolves charts dependancy
// charts(FusionCharts);

// const dataSource = {
//   chart: {
//     caption: "Skill Analysis of Harry",
//     subcaption: "Scale: 1 (low) to 5 (high)",
//     theme: "fusion",
//     showlegend: "0",
//     showdivlinevalues: "0",
//     showlimits: "0",
//     showvalues: "1",
//     plotfillalpha: "40",
//     plottooltext: "Harry's <b>$label</b> skill is rated as <b>$value</b>"
//   },
//   categories: [
//     {
//       category: [
//         {
//           label: "Communication"
//         },
//         {
//           label: "Punctuality"
//         },
//         {
//           label: "Problem Solving"
//         },
//         {
//           label: "Meeting Deadlines"
//         },
//         {
//           label: "Team Player"
//         },
//         {
//           label: "Technical Knowledge"
//         }
//       ]
//     }
//   ],
//   dataset: [
//     {
//       seriesname: "User Ratings",
//       data: [
//         {
//           value: "3"
//         },
//         {
//           value: "3"
//         },
//         {
//           value: "4"
//         },
//         {
//           value: "3"
//         },
//         {
//           value: "2"
//         },
//         {
//           value: "4"
//         }
//       ]
//     }
//   ]
// };

// class MobilChart extends React.Component {
//   render() {
//     return (
//       <ReactFusioncharts
//         type="radar"
//         width="90%"
//         height="40%"
//         dataFormat="JSON"
//         dataSource={dataSource}
//       />
//     );
//   }

// }

import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import radar from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
// charts(FusionCharts, ReactFusioncharts, PowerCharts, radar, FusionTheme);

ReactFC.fcRoot(FusionCharts, PowerCharts, radar, FusionTheme);

export const MobilChart = () => {
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
    type: "pie3d", // The chart type
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
        numberSuffix: "",
        theme: "candy", // Set the theme for your chart
        bgColor: "#e0ded8",
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};
