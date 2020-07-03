import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import arrayOf from "../utils/arrayOf";

const NumberSelectorStyles = styled.div`
  display: flex;
  margin: 4rem 0 0;
  justify-content: center;
`;

const NoteModeLabel = styled.label`
  margin-top: 2rem;
  text-align: center;
  color: white;
  cursor: pointer;
  display: block;
  & input {
    cursor: pointer;
  }
`;

const NumberSelector = ({
  selectedNumber,
  updateSelectedNumber,
  noteMode,
  updateNoteMode,
}) => {
  return (
    <>
      <NumberSelectorStyles>
        {arrayOf((i) => i, 9).map((i) => (
          <Cell
            key={i}
            value={noteMode ? null : i}
            notes={[i]}
            thickRight={i % 3 === 0}
            click={() => updateSelectedNumber(i)}
            selectedNumber={selectedNumber}
          />
        ))}
      </NumberSelectorStyles>
      <NoteModeLabel>
        <input
          type="checkbox"
          checked={noteMode}
          onChange={() => updateNoteMode(!noteMode)}
        />
        Notes
      </NoteModeLabel>
    </>
  );
};

export default NumberSelector;
