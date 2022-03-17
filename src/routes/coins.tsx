import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.h1`
  padding: 20px 20px;
  font-size: 36px;
  color: white;
`;
const ListWrapper = styled.ul``;
const CoinList = styled.li`
  margin: 20px 0;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    width: 100%;
    color: ${(props) => props.theme.bgColor};
    padding: 20px 0;
  }
  img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
`;

interface ICoin {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}
function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const json = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  console.log(coins);
  return (
    <Wrapper>
      <Header>Coin List</Header>
      {loading ? (
        "loading..."
      ) : (
        <ListWrapper>
          {coins.map((coin) => (
            <CoinList key={coin.id}>
              <img
                src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                alt="img"
              ></img>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                {coin.name}
              </Link>
            </CoinList>
          ))}
        </ListWrapper>
      )}
    </Wrapper>
  );
}

export default Coins;
