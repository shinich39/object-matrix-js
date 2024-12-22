# object-matrix-js

Create a two-dimensional matrix in javascript.

## Usage

```js
import { ObjectMatrix } from "object-matrix-js";

const obj = new ObjectMatrix({ width: 10, height: 10 });
obj.init();

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    obj.setValue(i, j, obj.width * j + i);
  }
}

obj.width
// 10

obj.height
// 10

obj.data
// [
//    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
//   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//   36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//   48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//   60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//   72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//   84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//   96, 97, 98, 99
// ]

obj.getIndex(1, 2);
// 21

obj.getValue(1, 2);
// 21

obj.getRow(0)
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

obj.getColumn(0)
// [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
```