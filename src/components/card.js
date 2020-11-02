import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: ${(props) => props.background};
  max-width: 20vw;
  max-height: 70vh;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
const ImgDiv = styled.div`
  max-width: 90%;
  max-height: 70%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid black 5px; */
  overflow: hidden;
  margin: 3rem;
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const Name = styled.h1`
  color: black;
  margin: 0.5rem;
`;
const Paragraph = styled.p`
  font-size: 2rem;
  margin: 0.2rem;
`;

export default function Card({ imgSrc, ...props }) {
  return (
    <Div className="cardcont" background={props.background}>
      <ImgDiv>
        {imgSrc ? (
          <Img src={props.src} alt={props.alt} />
        ) : (
          <h1 className="placetext">CARD WILL APPEAR HERE...</h1>
        )}
      </ImgDiv>
      <Name>{props.name}</Name>
      <Name>{props.groupName}</Name>
      <Paragraph>{props.description}</Paragraph>
    </Div>
  );
}
