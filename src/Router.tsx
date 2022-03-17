import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/coin";
import Coins from "./routes/coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
