import React from 'react'
import styled from 'styled-components';

const LocationDiv = styled.div`
  width: 25%;
`;

export default function LocationCard (props) {
  const { location } = props;
  return (
      <LocationDiv>
        <h3>{location.name}</h3>
        <ul>
          <li>Type: {location.type}</li>
          <li>Dimension: {location.dimension}</li>
        </ul>
      </LocationDiv>
  );
}
