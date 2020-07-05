import React from "react";
import styled from "styled-components";

const NoteModeLabel = styled.label`
  margin: 0.5rem;
  text-align: center;
  color: white;
  cursor: pointer;
  display: block;
  & input {
    cursor: pointer;
  }
`;

const NoteModeButton = ({ noteMode, updateNoteMode }) => (
  <NoteModeLabel>
    <input
      type="checkbox"
      checked={noteMode}
      onChange={() => updateNoteMode(!noteMode)}
    />
    Notes
  </NoteModeLabel>
);

export default NoteModeButton;
