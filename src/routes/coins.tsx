import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import Header from "../components/Header";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;
const ListWrapper = styled.ul``;
const CoinList = styled.li`
  margin: 20px 0;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  a {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.bgColor};
    width: 100%;
    span {
      width: 200px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;
const Percentage = styled.span`
  color: red;
  width: 100px;
`;
const Home = styled.div`
  background-image: url(${require("../img/bgimg.jpg")});
  position: relative;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  background-repeat: no-repeat;
`;

interface ICoin {
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
function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("Coins", fetchCoins);
  return (
    <>
      <Home>
        <Header />
      </Home>
      <Wrapper>
        {isLoading ? (
          "loading..."
        ) : (
          <ListWrapper>
            {data?.slice(0, 100).map((coin) => (
              <CoinList key={coin.id}>
                <img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt="img"
                ></img>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <span>{coin.name}</span>
                  <Percentage>{coin.quotes.USD.percent_change_24h}%</Percentage>
                  <span>{coin.quotes.USD.price.toFixed(3)}$</span>
                </Link>
              </CoinList>
            ))}
          </ListWrapper>
        )}
      </Wrapper>
    </>
  );
}

export default Coins;
