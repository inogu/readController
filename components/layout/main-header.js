import * as S from '../../styles/styled';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function MainHeader() {
  return (
    <S.HeaderBooks>
      <S.Logo>
        <StyledLink href="/">Controlador de leitura</StyledLink>
      </S.Logo>
    </S.HeaderBooks>
  );
}

export default MainHeader;
