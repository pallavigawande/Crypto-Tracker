import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import MainComponent from "./components/LandingPage/MainComponent";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          {/* <Route path="/dashboard" element={<WatchlistPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
