import Footer from "./components/footer";
import Header from "./components/header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NorthAmerica from "./pages/northAmerica";
import Europe from "./pages/europe";
import Asia from "./pages/asia";
import Africa from "./pages/africa";
import SouthAmerica from "./pages/southAmerica";
import Oceania from "./pages/oceania";
import AllCountries from "./pages/allCountries";
import Home from "./components/home";
function App() {
  return (
    <div className="app min-vh-100 d-flex flex-column gap2">
      <Header />
      <main className="container flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/home" element={<Home />} />
          <Route path="/pages/allCountries" element={<AllCountries />} />
          <Route path="/pages/northAmerica" element={<NorthAmerica />} />
          <Route path="/pages/europe" element={<Europe />} />
          <Route path="/pages/asia" element={<Asia />} />
          <Route path="/pages/africa" element={<Africa />} />
          <Route path="/pages/southAmerica" element={<SouthAmerica />} />
          <Route path="/pages/oceania" element={<Oceania />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
