import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { Card } from 'react-bootstrap';


const FavoritesPage = () => {

    const { favorites, setFavorites} = useOutletContext();

    const bgHome = 'https://images.alphacoders.com/133/1330376.png'

    // const fakeData = () => {

    //     setFavorites([])
    //     console.log(`These are the favorites: ${favorites}`)
    // }

    // useEffect(() => {
    //     fakeData();
    // },)

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
            {favorites.map(character => (
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
              </Card>
            ))}
          </div>
        </div>
      );
    }
    
    export default FavoritesPage;
