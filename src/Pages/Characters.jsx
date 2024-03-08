import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";


function Characters() {

  
  const bgHome = 'https://images.alphacoders.com/133/1330376.png'
  
  const { favorites, setFavorites} = useOutletContext();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        // setFavorites(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Something went wrong fetching characters", error);
      }
    };

    fetchData();
  }, []);

  const handleFavorite = (character) => {
    setFavorites([...favorites, character])
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, 
          backgroundImage: `url(${bgHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1, 
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.50)',
        }}
        />

      <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  paddingTop: '100px',
                  justifyContent: 'center', 
                  }}>
        {characters.map(character => (
          <Card key={character.id} 
                style={{ 
                  width: '18rem', 
                  margin: '10px', 
                  backgroundColor: '#343a40', 
                  color: 'white' 
                  }}>
            <Card.Img variant="top" src={character.image} alt={character.name} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text >
                Status: {character.status}
                <br />
                Species: {character.species}
                <br />
                Origin: {character.origin.name}
                <br />
                Location: {character.location.name}
              </Card.Text>
            </Card.Body>
            <Button onClick={() => handleFavorite(character)}>
              Favorite
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Characters;

