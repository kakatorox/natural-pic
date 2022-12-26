import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {

  const [foto, setfoto] = useState([]);
  const endpoint = "/fotos.json";

  const getFotos = async () => {
    const url = endpoint;
    const response = await fetch(url);
    let { photos } = await response.json();
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false
    }));    
    setfoto(photos);
    console.log(photos)
  }

  useEffect(() => {
    getFotos()
  },[]);

  return (
    <div className="App">
      <Context.Provider value={{ foto, setfoto }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="natural-pic/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
