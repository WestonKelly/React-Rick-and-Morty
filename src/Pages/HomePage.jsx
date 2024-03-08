import React from "react";
import { Image } from "react-bootstrap";


function HomePage() {
  const bgHome = 'https://images.alphacoders.com/133/1330376.png'
  return (
  <div
    style={{
      backgroundImage: `url(${bgHome})`,
    }}>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/330px-Rick_and_Morty.svg.png" fluid />
  </div>
  );
}

export default HomePage;
