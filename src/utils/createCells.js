import shortId from "shortid";

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

export default createCells;
