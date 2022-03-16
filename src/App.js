import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PokemonDetails from "./Pages/PokemonDetails";
import Error from "./Pages/Error";
function App() {
  return (
    <div className="bg-[#f5e4d0]">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
