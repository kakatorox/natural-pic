import { useContext } from "react";
import "../assets/css/galeria.css";
import Context from "../Context";
import Heart from "./Heart";

export default function Home() {
  const { foto, setFoto} = useContext(Context);

  return (
    <div className="galeria grid-columns-5 p-3">
      {}
    </div>
  );
}
