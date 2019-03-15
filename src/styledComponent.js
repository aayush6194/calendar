 import styled from 'styled-components';


export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10%;`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.6em;
  color: white;
  border-radius: 0.2em;
  padding: 0.08em 0;
  margin: 0.2em 10%;
  Font-variant-numeric: tabular-nums;`;


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);`;
