'use strict'

var matrixObj = {
  rows: 2,
  columns: 4,
  data: [1, 2, 3, 4, 5, 6, 7, 8]
};

var matrixArray = [[1, 2, 3, 4], [5, 6, 7, 8]];

function matrixArrayToMatrixObj(matrixArray) {
  var obj = {
    rows: matrixArray.length,
    columns: 0,
    data: []
  };

  for (let i = 0; i < matrixArray.length; i++) {
    let rowData = matrixArray[i];

    obj.columns = rowData.length;

    obj.data = obj.data.concat(rowData);
  }

  return obj;
}

function matrixObjToMatrixArray(matrixObj) {
  var matrixArray = [];

  for (let i = 0; i < matrixObj.data.length; i = i + matrixObj.columns) {
    matrixArray.push(matrixObj.data.slice(i, i + matrixObj.columns));
  }

  return matrixArray;
}
