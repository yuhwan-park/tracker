export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
    response.json()
  );
}
export function fetchCoinTicker(coinId: string | undefined) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then(
    (response) => response.json()
  );
}
export function fetchCoinInfo(coinId: string | undefined) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`).then(
    (response) => response.json()
  );
}
export function fetchCoinPrice(coinId: string | undefined) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
