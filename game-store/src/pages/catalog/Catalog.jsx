import React from 'react';

import Card from '../../components/card/Card';
import './Catalog.css'

const CatalogScreen = () => {
  const cards = [];

  return (
    <>
      <div className="Catalog">
        {cards.map((card) => (
          <Card props={card} />
        ))}
      </div>
    </>
  )
}

export default CatalogScreen
