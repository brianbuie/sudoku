import React, { useState } from "react";
import Theme from "./ui/Theme";
import Board from "./ui/Board";
import NumberSelector from "./ui/NumberSelector";

function App() {
  const [selectedNumber, updateSelectedNumber] = useState(1);
  const [noteMode, updateNoteMode] = useState(false);

  return (
    <Theme>
      <Board selectedNumber={selectedNumber} noteMode={noteMode} />
      <NumberSelector
        selectedNumber={selectedNumber}
        updateSelectedNumber={updateSelectedNumber}
        noteMode={noteMode}
        updateNoteMode={updateNoteMode}
      />
    </Theme>
  );
}

export default App;
