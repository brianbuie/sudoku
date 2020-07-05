import React from "react";
import styled from "styled-components";
import arrayOf from "../utils/arrayOf";

const CellStyles = styled.div`
  background: ${(props) => props.theme.cellColors[props.highlightLevel]};
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: ${(props) => (props.thickRight ? "3px" : "1px")};
  border-bottom-width: ${(props) => (props.thickBottom ? "3px" : "1px")};
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.25rem;
`;

const CellValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${(props) => (props.mediumDigitSize ? "1.25rem" : "2.5rem")};
`;

const CellNotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  font-size: 0.75rem;
`;

const CellNote = styled.span`
  width: ${(1 / 3) * 100}%;
  height: ${(1 / 3) * 100}%;
  text-align: center;
  color: ${(props) => (props.bolded ? "black" : "rgba(0, 0, 0, 0.4)")};
  font-weight: ${(props) => (props.bolded ? "bold" : "normal")};
`;

const CellNotes = ({ notes, selectedNumber }) => (
  <CellNotesContainer>
    {arrayOf((i) => i, 9).map((digit) => (
      <CellNote key={digit} bolded={selectedNumber === digit}>
        {notes.includes(digit) ? digit : " "}
      </CellNote>
    ))}
  </CellNotesContainer>
);

const Cell = ({
  thickRight,
  thickBottom,
  value,
  notes,
  highlightLevel,
  selectedNumber,
  click,
  mediumDigitSize,
}) => (
  <CellStyles {...{ thickRight, thickBottom, highlightLevel }} onClick={click}>
    {value ? (
      <CellValue mediumDigitSize={mediumDigitSize}>
        <span>{value}</span>
      </CellValue>
    ) : (
      <CellNotes notes={notes} selectedNumber={selectedNumber} />
    )}
  </CellStyles>
);

export default Cell;
