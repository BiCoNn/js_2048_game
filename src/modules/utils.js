// export function getTwoRandomCells() {
//   const idx1 = Math.floor(Math.random() * 16);
//   let idx2;

//   do {
//     idx2 = Math.floor(Math.random() * 16);
//   } while (idx2 === idx1);

//   return [idx1, idx2];
// }

// export function getFieldRows(size, array) {
//   const fieldRows = [];
//   let row = [];

//   for (let i = 0; i < array.length; i++) {
//     row.push(array[i]);

//     if (row.length === size) {
//       fieldRows.push(row);
//       row = [];
//     }
//   }

//   return fieldRows;
// }

// export function getFieldColumns(size, array) {
//   const fieldColumns = Array.from({ length: size }, () => []);

//   for (let i = 0; i < array.length; i++) {
//     const col = i % size; // номер стовпця

//     fieldColumns[col].push(array[i]);
//   }

//   return fieldColumns;
// }

// export function reflow(nodeList) {
//   const arrayList = Array.from(nodeList);
//   const field = [];

//   for (let i = 0; i < arrayList.length; i++) {
//     field.push(Number(arrayList[i].textContent));
//   }

//   return field;
// }
import { scoreToNull } from "./Game.class.js";

export function getTwoRandom() {
  const xR = Math.round(Math.random() * 3);
  const yR = Math.round(Math.random() * 3);

  return [xR, yR];
}

export function writeTwoRandom(arr) {
  const firstCell = getTwoRandom();
  const secondCell = getTwoRandom();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
      }

      if (firstCell[0] === i && firstCell[1] === j) {
        arr[i][j] = Math.random() > 0.1 ? 2 : 4;
      }

      if (secondCell[0] === i && secondCell[1] === j) {
        arr[i][j] = Math.random() > 0.1 ? 2 : 4;
      }
    }
  }
}

// для транспонування масиву якщо рух вверх чи вниз

export function transponMatrix(field) {
  if (!field || field.length === 0) {
    return field;
  }

  return field[0].map((_, i) => field.map((row) => row[i]));
}

// для вставки випадкових двох або одного чисел
export function insertRandomNums(field) {
  const emptyCells = [];

  field.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 0) {
        emptyCells.push([i, j]);
      }
    });
  });

  if (emptyCells.length === 0) {
    return field;
  }

  const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];

  field[x][y] = Math.random() < 0.9 ? 2 : 4;

  return field;
}

// основна функція, в ній я

export function shiftAndMurgeNums(field, direction, counter) {
  let _field = field;
  const _direction = direction;

  if (_direction === 'ArrowDown' || _direction === 'ArrowUp') {
    _field = transponMatrix(_field);
  }

  for (let i = 0; i < _field.length; i++) {
    let row = _field[i];

    if (direction === 'ArrowLeft' || direction === 'ArrowUp') {
      row = slideAndMerge(row, 'left', counter);
    } else {
      row = slideAndMerge(row, 'right', counter);
    }

    _field[i] = row;
  }

  if (_direction === 'ArrowDown' || _direction === 'ArrowUp') {
    _field = transponMatrix(_field);
  }

  return _field;
}

export let score = 0;

export function slideAndMerge(_row, direction) {
  let row = _row;

  row = slide(row, direction);

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] !== 0 && row[i] === row[i + 1]) {
      row[i] *= 2;
      score += row[i];
      row[i + 1] = 0;
      i++;
    }
  }

  row = slide(row, direction);

  return row;
}

function slide(row, direction) {
  const newRow = [];
  let zeros = 0;

  for (const n of row) {
    if (n !== 0) {
      newRow.push(n);
    } else {
      zeros++;
    }
  }

  if (direction === 'left') {
    while (zeros > 0) {
      newRow.push(0);
      zeros--;
    }
  }

  if (direction === 'right') {
    while (zeros > 0) {
      newRow.unshift(0);
      zeros--;
    }
  }

  return newRow;
}

export function renderField(state, field) {
  const _field = Array.from(field);
  const result = [];

  for (let i = 0; i < _field.length; i += 4) {
    result.push(_field.slice(i, i + 4));
  }

  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      // обнуляєм стилі і контент плитки
      result[i][j].textContent = '';
      result[i][j].className = 'field-cell';

      if (state[i][j] !== 0) {
        // якщо не нуль - додаєм відповідний
        result[i][j].textContent = state[i][j];
        result[i][j].classList.add(`field-cell--${state[i][j]}`);
      }
    }
  }
}
