import React, { useState } from "react";
import shortId from "shortid";
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

function randomValue() {
  if (Math.random() < 0.49) return null;
  return Math.ceil(Math.random() * 9);
}

function randomNotes() {
  const notes = [];
  for (let i = 1; i <= 9; i++) {
    if (Math.random() > 0.49) notes.push(i);
  }
  return notes;
}

function createCells() {
  const cells = [];
  for (let row = 1; row <= 9; row++) {
    for (let column = 1; column <= 9; column++) {
      let region = 1;
      if (column > 3) region++;
      if (column > 6) region++;
      if (row > 3) region += 3;
      if (row > 6) region += 3;
      cells.push({
        id: shortId.generate(),
        row,
        column,
        region,
        notes: randomNotes(),
        value: randomValue(),
      });
    }
  }
  return cells;
}

const Board = ({ selectedNumber, noteMode }) => {
  const [cells, updateCells] = useState(createCells());

  const updateCellValue = (id, value) => {
    const { row, column, region } = cells.find((cell) => cell.id === id);
    updateCells(
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
                click={() => updateCellValue(cell.id, selectedNumber)}
                selectedNumber={selectedNumber}
              />
            ))}
        </RowStyles>
      ))}
    </BoardStyles>
  );
};

export default Board;
