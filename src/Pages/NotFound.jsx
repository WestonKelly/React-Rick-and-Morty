import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavBar';

function NotFound() {
  const bgHome = 'https://wallpapers.com/images/hd/rick-and-morty-portal-0nrvnjsf1klo2jwa.jpg'
  return (
    <>
    <NavigationBar />
    <div
    style={{
      backgroundImage: `url(${bgHome})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      position: 'relative',
    }}
    >
      <Container 
        style={{ 
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          color: 'white',
          textAlign: 'center',
          }}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      </Container>
    </div>
   </> 
  );
}

export default NotFound;