import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  type: ${(props) => props.type};
  border: 2px solid darkgray;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  border-radius: 6px;
  width: 24em;
`;

function TextArea(props) {
  return (
    <StyledTextArea
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default TextArea;
