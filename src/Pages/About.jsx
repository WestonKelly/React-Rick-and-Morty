import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  const bgHome = 'https://images.alphacoders.com/133/1330376.png'
  return (
    <div
    style={{
      backgroundImage: `url(${bgHome})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      position: 'relative',
    }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
        />
      <Container style={{ position: 'relative', zIndex: 1, color: 'white' }}>  
      <h1>About Rick and Morty</h1>
      <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks.</p>
      </Container>
    </div>
  );
}

export default About;