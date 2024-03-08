// App.js
import { Outlet, Link } from "react-router-dom";
import NavigationBar from "./Pages/NavBar";
import { useState } from "react";


export default function App() {

  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <NavigationBar />
      <Outlet context={{favorites, setFavorites}} />
      </div>
  );
}
