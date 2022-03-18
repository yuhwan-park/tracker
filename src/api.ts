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
