import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinPrice } from "../api";

interface IPrice {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function CoinChart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IPrice[]>(["price", coinId], () =>
    fetchCoinPrice(coinId)
  );
  return <></>;
}

export default CoinChart;
