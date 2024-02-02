// import Pages from "./pages/Home";
import './App.css'
import Categories from "./components/categories";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import Cuisine from "./pages/Cuisine";
import Home from "./pages/Home";
import Searched from './pages/Searched';
import Search from './components/Search';
import Recipe from './pages/Recipe';
function App() {
  return (
  <div >
    <BrowserRouter>
      <Search/>
      <Categories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cuisine/:cuisine" element={<Cuisine/>} />
        <Route path="searched/:search" element={<Searched/>} />
        <Route path="recipe/:recipe" element={<Recipe/>} />
      </Routes>
    
    </BrowserRouter>
  </div>
  );
}

export default App;
