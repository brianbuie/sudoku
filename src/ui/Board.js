import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import arrayOf from "../utils/arrayOf";

const BoardStyles = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowStyles = styled.div`
  display: flex;
`;

const Board = ({
  selectedNumber,
  noteMode,
  updateBoard,
  updateCell,
  cells,
}) => {
  const addCellValueAndDeleteNotes = (id, value) => {
    const { row, column, region } = cells.find((c) => c.id === id);
    updateBoard(
      cells.map((cell) => {
        if (cell.id === id) return { ...cell, value };
        if (
          cell.row === row ||
          cell.column === column ||
          cell.region === region
        )
          return {
            ...cell,
            notes: cell.notes.filter((note) => note !== value),
          };
        return cell;
      })
    );
  };

  const toggleNote = (id, number) => {
    const cell = cells.find((c) => c.id === id);
    if (!cell.notes.includes(number))
      return updateCell(id, { notes: [...cell.notes, number] });
    return updateCell(id, { notes: cell.notes.filter((i) => i !== number) });
  };

  const determineHighlightLevel = (cell) => {
    if (cell.value === selectedNumber) return 2;
    if (!cell.value && cell.notes.includes(selectedNumber)) return 1;
    return 0;
  };

  const handleCellClick = (id) => {
    const cell = cells.find((c) => c.id === id);
    if (noteMode) return toggleNote(id, selectedNumber);
    if (cell.value === selectedNumber) return updateCell(id, { value: null });
    addCellValueAndDeleteNotes(id, selectedNumber);
  };

  return (
    <BoardStyles>
      {arrayOf((i) => i, 9).map((rowNumber) => (
        <RowStyles key={rowNumber}>
          {cells
            .filter((cell) => cell.row === rowNumber)
            .map((cell) => (
              <Cell
                key={cell.id}
                {...cell}
                thickRight={cell.column % 3 === 0}
                thickBottom={cell.row % 3 === 0}
                click={() => handleCellClick(cell.id)}
                highlightLevel={determineHighlightLevel(cell)}
                selectedNumber={selectedNumber}
              />
            ))}
        </RowStyles>
      ))}
    </BoardStyles>
  );
};

export default Board;
