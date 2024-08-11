// let cont = document.querySelector(".container");
// let rows;
// let columns;
// function getRow() {
//   for (let i = 0; i < 1; i++) {
//     let rowTile = document.createElement("div");
//     rowTile.classList.add("rowTile");
//     cont.appendChild(rowTile);
//   }
// }
// function getColumn() {
//   for (let i = 0; i < 1; i++) {
//     let columnTile = document.createElement("div");
//     columnTile.classList.add("columnTile");
//     cont.appendChild(columnTile);
//   }
// }
// function tileDisplay(num) {
//   for (let i = 0; i < num; i++) {
//     getRow();
//     getColumn();
//   }
// }
// tileDisplay(128);

let cont = document.querySelector(".container");
let rows;
let columns;
function getRow() {
  for (let i = 0; i < 1; i++) {
    let rowTile = document.createElement("div");
    rowTile.classList.add("rowTile");
    cont.appendChild(rowTile);
  }
}
function getColumn() {
  for (let i = 0; i < 1; i++) {
    let columnTile = document.createElement("div");
    columnTile.classList.add("columnTile");
    cont.appendChild(columnTile);
  }
}
function tileDisplay(num) {
  for (let i = 0; i < num; i++) {
    getRow();
    getColumn();
  }
}
tileDisplay(128);
