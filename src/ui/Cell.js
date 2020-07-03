import React from "react";
import styled from "styled-components";
import arrayOf from "../utils/arrayOf";

const CellStyles = styled.div`
  background: ${(props) => props.theme.cellBkgDefault};
  border-style: solid;
  border-color: ${(props) => props.theme.borderColor};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: ${(props) => (props.columnKey % 3 === 0 ? "3px" : "1px")};
  border-bottom-width: ${(props) => (props.rowKey % 3 === 0 ? "3px" : "1px")};
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
  font-size: 2.5rem;
`;

const CellNotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  font-size: 0.75rem;
  & span {
    width: ${(1 / 3) * 100}%;
    height: ${(1 / 3) * 100}%;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const CellNotes = ({ notes }) => (
  <CellNotesContainer>
    {arrayOf((i) => i, 9).map((possibleNote, key) => (
      <span key={key}>{notes.includes(possibleNote) ? possibleNote : " "}</span>
    ))}
  </CellNotesContainer>
);

const Cell = ({ rowKey, columnKey, value, notes, click }) => {
  return (
    <CellStyles columnKey={columnKey} rowKey={rowKey} onClick={click}>
      {value ? (
        <CellValue>
          <span>{value}</span>
        </CellValue>
      ) : (
        <CellNotes notes={notes} />
      )}
    </CellStyles>
  );
};

export default Cell;
