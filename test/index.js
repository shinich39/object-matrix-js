import { ObjectMatrix } from "../dist/object-matrix.mjs";

const obj = new ObjectMatrix({ width: 10, height: 10 });
obj.init();

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    obj.setValue(i, j, obj.width * j + i);
  }
}

console.log(obj.data)

console.log(obj.getIndex(1, 2));
console.log(obj.getValue(1, 2));

console.log(obj.getRow(0))
console.log(obj.getColumn(0))