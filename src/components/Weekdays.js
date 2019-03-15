import React from 'react';
import styled from 'styled-components';


export const Tile = styled.div`
  padding: 15%;
  border: 0.1em;
  border-style: solid;
  background: white;
  color: rgb(118, 75, 226);
  cursor: pointer
  border-radius: 0.3em;
  @media (max-width: 1100px){
    padding: 10%;
    font-size: 90%;
  }
  @media (max-width: 720px){
    padding: 8% 0;
     font-size: 80%;
  }`;


const Weekday = styled(Tile)`
  padding: 0.8em 0;

  text-align: center;
  margin: 0;
 @media (max-width: 1100px){
    padding:0.5em 0;
  }
  @media (max-width: 720px){
    padding: 0;
  }

`;


let Weekdays = props => <Weekday>{props.day}</Weekday>;

export default Weekdays;
