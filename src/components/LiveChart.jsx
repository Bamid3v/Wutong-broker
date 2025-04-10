/* eslint-disable no-unused-vars */
import { fetchStockData } from "@/actions/services";
import { candleStickOptions } from "@/constant";
import { formatStockData } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";

// eslint-disable-next-line react/prop-types
const LiveChart = ({ symbol }) => {
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    fetchStockData(symbol).then((data) => setStockData(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

  const limitedArray = seriesData.slice(0, 100);

  console.log(limitedArray, 'limitedArray')
  console.log(stockData, "stockData");

  return (
    <section className="w-full h-screen ">
      {/* <ReactApexChart
        series={[
          {
            data: seriesData,
          },
        ]}
        options={candleStickOptions}
        type="candlestick"
      /> */}
    </section>
  );
};

export default LiveChart;
