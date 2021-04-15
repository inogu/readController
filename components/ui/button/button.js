import Link from 'next/link';

import styled from 'styled-components';

const StyledButton = styled.button`
  background: 'purple';
  color: 'white';

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 6px;
  width: 20em;
  height: 3em;
`;

function Button(props) {
  if (props.link) {
    return (
      <StyledButton as="a" href={props.link}>
        {props.children}
      </StyledButton>
    );
  }

  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}

export default Button;
