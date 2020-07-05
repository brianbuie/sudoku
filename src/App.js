import React, { useState } from "react";
import Theme from "./ui/Theme";
import Board from "./ui/Board";
import createCells from "./utils/createCells";
import NumberSelector from "./ui/NumberSelector";
import NoteModeButton from "./ui/NoteModeButton";
import UndoButton from "./ui/UndoButton";
import { FlexRow } from "./ui/FlexBox";

function App() {
  const [selectedNumber, updateSelectedNumber] = useState(1);
  const [cells, updateCells] = useState(createCells());
  const [moveHistory, updateMoveHistory] = useState([]);
  const [noteMode, updateNoteMode] = useState(false);

  const addMoveToHistory = (cellsState) => {
    updateMoveHistory([...moveHistory, cellsState]);
  };

  const updateBoard = (newCellsState) => {
    addMoveToHistory(cells);
    updateCells(newCellsState);
  };

  const updateCell = (id, newProps) => {
    updateBoard(
      cells.map((cell) => {
        if (cell.id !== id) return cell;
        return { ...cell, ...newProps };
      })
    );
  };

  const undo = () => {
    updateCells(moveHistory[moveHistory.length - 1]);
    updateMoveHistory(
      moveHistory.filter((s, key) => key < moveHistory.length - 1)
    );
  };

  return (
    <Theme>
      <Board
        selectedNumber={selectedNumber}
        noteMode={noteMode}
        updateBoard={updateBoard}
        updateCell={updateCell}
        cells={cells}
      />
      <NumberSelector
        selectedNumber={selectedNumber}
        updateSelectedNumber={updateSelectedNumber}
        noteMode={noteMode}
      />
      <FlexRow justifyContent="center" padding="2rem 0 0 0">
        <NoteModeButton noteMode={noteMode} updateNoteMode={updateNoteMode} />
        <UndoButton onClick={undo} disabled={!moveHistory.length}>
          Undo
        </UndoButton>
      </FlexRow>
    </Theme>
  );
}

export default App;
