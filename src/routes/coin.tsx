import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTicker } from "../api";
import Header from "../components/Header";
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
`;
const ListWrapper = styled.ul`
  height: 500px;
  width: 200px;
`;
const CoinList = styled.li``;

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams();
  const { isLoading: tickerloading, data: tickerdata } = useQuery<PriceData[]>(
    ["ticker", coinId],
    () => fetchCoinTicker(coinId)
  );
  const { isLoading: infoLoading, data: infodata } = useQuery<InfoData[]>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const loading = tickerloading || infoLoading;
  return (
    <Wrapper>
      <Header />
      {loading ? "Loading..." : <ListWrapper></ListWrapper>}
    </Wrapper>
  );
}
export default Coin;
