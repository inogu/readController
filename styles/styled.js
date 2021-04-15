import styled from 'styled-components';

export const HeaderBooks = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  height: 5rem;
  background-color: #ffb200;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: 'Fira', sans-serif;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  color: #94fdfd;
  text-decoration: none;
  color: #94fdfd;
`;

export const Title = styled.h1`
  font-size: 3.5em;
  color: darkslateblue;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
`;

export const SubTitle = styled.h3`
  font-size: 1em;
  color: darkgray;
  padding-left: 3em;
`;

export const Container = styled.div`
  text-align: center;
  background-color: #ccc;
`;

export const Label = styled.label`
  padding: 1em;
`;
