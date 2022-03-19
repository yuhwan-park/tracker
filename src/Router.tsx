import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/coin";
import Coins from "./routes/coins";
import Info from "./routes/Info";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="/:coinId/chart" element={<Chart />} />
          <Route path="/:coinId/info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
