"use strict";

import {
  copyObject,
  createArray,
  getContainedNumber,
} from "./libs/utils.min.mjs";

class ObjectMatrix {
  constructor(obj) {
    this.width = 0;
    this.height = 0;
    this.data = [];

    Object.assign(this, obj || {});
  }
}

ObjectMatrix.prototype.init = function () {
  this.data = createArray(this.width * this.height, null);
  return this;
};

ObjectMatrix.prototype.getIndex = function (x, y) {
  x = getContainedNumber(x, 0, this.width);
  y = getContainedNumber(y, 0, this.height);
  return y * this.width + x;
};

ObjectMatrix.prototype.getValue = function (x, y) {
  return this.data[this.getIndex(x, y)];
};

ObjectMatrix.prototype.setValue = function (x, y, value) {
  this.data[this.getIndex(x, y)] = value;
  return this;
};

ObjectMatrix.prototype.getRow = function (y) {
  const result = [];
  for (let i = 0; i < this.width; i++) {
    result.push(this.getValue(i, y));
  }
  return result;
};

ObjectMatrix.prototype.getColumn = function (x) {
  const result = [];
  for (let i = 0; i < this.height; i++) {
    result.push(this.getValue(x, i));
  }
  return result;
};

ObjectMatrix.prototype.toObject = function () {
  return copyObject({
    width: this.width,
    height: this.height,
    data: this.data,
  });
};

export { ObjectMatrix };
