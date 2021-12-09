import React from 'react';
import Card from '../../components/card/Card';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const CatalogScreen = () => {
  const query = gql`
    query ExampleQuery {
      locations {
        results {
          id
          name
          residents {
            id
            name
            status
            species
            type
            gender
            image
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  const cards = data && data.locations.results[0].residents;

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const Catalog = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px 40px;
    background: #e5e5e5;
    padding: 40px 60px;
  `;

  return (
    <>
      <Catalog>
        {cards.map((card) => (
          <Card key={card.id} props={card} />
        ))}
      </Catalog>
    </>
  );
};

export default CatalogScreen;
