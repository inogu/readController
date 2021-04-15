import styled from 'styled-components';

const StyledInput = styled.input`
  type: ${(props) => props.type};
  border: 2px solid darkgray;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  border-radius: 6px;
  width: 24em;
  height: 3em;
`;

function Input(props) {
  return (
    <StyledInput
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
