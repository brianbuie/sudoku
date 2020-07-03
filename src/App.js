import React, { useState } from "react";
import shortId from "shortid";
import Theme from "./ui/Theme";
import Board from "./ui/Board";
import Row from "./ui/Row";
import Cell from "./ui/Cell";
import arrayOf from "./utils/arrayOf";

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

const initialBoardState = {
  rows: [
    ...arrayOf(
      (rowKey) => ({
        rowKey,
        cells: [
          ...arrayOf(
            (columnKey) => ({
              rowKey,
              columnKey,
              value: randomValue(),
              notes: randomNotes(),
            }),
            9
          ),
        ],
      }),
      9
    ),
  ],
};

function createBoard() {
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

function App() {
  console.log(createBoard());
  const [boardState, updateBoardState] = useState(initialBoardState);

  const updateCellValue = (rowKey, columnKey, value) => {
    updateBoardState({
      ...boardState,
      rows: boardState.rows.map((row) => {
        if (row.rowKey !== rowKey) return row;
        return {
          ...row,
          cells: row.cells.map((cell) => {
            if (cell.columnKey !== columnKey) return cell;
            return { ...cell, value };
          }),
        };
      }),
    });
  };

  return (
    <Theme>
      <Board>
        {boardState.rows.map((row) => (
          <Row key={row.rowKey} rowKey={row.rowKey}>
            {row.cells.map((cell) => (
              <Cell
                key={cell.columnKey}
                {...cell}
                click={() => updateCellValue(cell.rowKey, cell.columnKey, 1)}
              />
            ))}
          </Row>
        ))}
      </Board>
    </Theme>
  );
}

export default App;
