import React from 'react';
 import styled from 'styled-components';

 export const Tile = styled.div`
   padding: 15%;
   border: 0.1em;
   border-style: solid;
   background: white;
   color: rgb(118, 75, 226);
   border-radius: 0.3em;
   @media (max-width: 1100px){
     padding: 10%;
     font-size: 90%;
   }
   @media (max-width: 720px){
     padding: 8% 0;
      font-size: 80%;
   }`;

   const Daybox = styled.div`
     text-align: center;
     font-size: 1.5em;
   `;

   const FirstTile = styled(Tile)`
     grid-column-start: ${props => props.start};`;

let Tiles = props => {
  if (props.day === 1) {
    return <FirstTile onClick={props.click} start={props.firstDay + ""}><Daybox>{props.day}</Daybox>{props.event}</FirstTile>;
  }
  return <Tile onClick={props.click}><Daybox>{props.day}</Daybox>{props.event}</Tile>;
};

export default Tiles;
