export function getTwoRandomCells() {
  const idx1 = Math.floor(Math.random() * 16);
  let idx2;

  do {
    idx2 = Math.floor(Math.random() * 16);
  } while (idx2 === idx1);

  return [idx1, idx2];
}
