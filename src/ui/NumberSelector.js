import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import arrayOf from "../utils/arrayOf";

const NumberSelectorStyles = styled.div`
  display: flex;
  margin: 4rem 0 0;
  justify-content: center;
`;

const NumberSelector = ({ selectedNumber, updateSelectedNumber, noteMode }) => {
  return (
    <NumberSelectorStyles>
      {arrayOf((i) => i, 9).map((i) => (
        <Cell
          key={i}
          value={i}
          mediumDigitSize={noteMode}
          thickRight={i % 3 === 0}
          click={() => updateSelectedNumber(i)}
          selectedNumber={selectedNumber}
          highlightLevel={selectedNumber === i ? 2 : 0}
        />
      ))}
    </NumberSelectorStyles>
  );
};

export default NumberSelector;
