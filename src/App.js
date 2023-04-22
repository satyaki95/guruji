import React from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./Component/Header/Header";
import Carousel from "./Component/Carousel/Carousel";
import CardList from "./Component/Cards/CardlList";
import Sun from './Component/Sun/SunAndCircularPart';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 3,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 4,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 5,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 6,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 7,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 8,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 9,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 10,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 11,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  },
  {
    id: 12,
    title: 'Card 3',
    description: 'This is the third card',
    image: 'https://www.w3schools.com/howto/img_nature_wide.jpg'
  }
]; 


function App() {
  return <div>
    <Header />
    <p></p>
    <Carousel />
    <p></p>
    <Carousel />
    <p></p>
    <CardList cards={cards} />
    <p></p>
    <Sun />
  </div>;
}

export default App;
