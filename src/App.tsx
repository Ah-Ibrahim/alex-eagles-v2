import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page";
import VehiclesPage from "./pages/vehicles/vehicles-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
    </>
  );
}

export default App;
