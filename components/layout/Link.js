import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.a`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: var(--color-grey-200);
  }
`;

export default ({ route, params, href, children, className }) => (
  <Link route={route} params={params} href={href} passHref>
    <StyledLink className={className}>{children}</StyledLink>
  </Link>
);
