import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {

  const [fotos, setFotos] = useState([]);
  const endpoint = '/natural-pic/fotos.json';

  const getFotos = async () => {
    const response = await fetch(endpoint);
    let { photos } = await response.json();
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false
    }));    
    setFotos(photos);
  }

  useEffect(() => {
    getFotos()
  },[]);

  return (
    <div className="App">
      <Context.Provider value={{ fotos, setFotos }}>
        <BrowserRouter basename="natural-pic">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
