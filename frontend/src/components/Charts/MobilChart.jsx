import { useState, useEffect } from "react";
import { getTagsTop } from "@services/apiRequest";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";

ReactFC.fcRoot(FusionCharts, PowerCharts, Charts, FusionTheme);

export const MobilChart = () => {
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    getTagsTop(setTagList);
  }, []);

  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "35%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Les 10 tags les plus utilisés",
        yAxisName: "NB. de topics",
        theme: "candy",
        bgColor: "#e0ded8",
      },
      data: tagList,
    },
  };

  return <ReactFC {...chartConfigs} />;
};
