import React from 'react';
import styled from 'styled-components'

const Title = (props) => {
  const Title = styled.h1`
    font: inherit;
    font-size: 48px;
    font-weight: 800;
    line-height: 52px;
    color: #062225;
    margin: 0;
    margin-top: 204px!important;
  `;

  return (
    <>
      <Title>{props.children}</Title>
    </>
  )
}

export default Title;
