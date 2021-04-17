import styled from 'styled-components';

export const HeaderBooks = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  margin-right: 2rem
  height: 5rem;
  background-image: url("/booksHeader.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  display: flex;
  padding: 5px 0;
  text-align: center;
  margin-left: 13em;
  border: solid 3px;
  border-radius: 8px;
`;

export const Container = styled.div`
  background-color: #ddd;
  height: 700px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #4e0909;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  text-align: center;
`;

export const Footer = styled.div`
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;
