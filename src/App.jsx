/* eslint-disable react/jsx-key */
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

const cards = data.map((card) => {
    return (
          <Card
            id={card.id}
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
          />
    )
})

export default function App() {
  return (
    <div>
      <Navbar />
        <div className="container">
          <Header />
          <div className="experience-cards">
              {cards}
          </div>
        </div>
    </div>
  );
}
