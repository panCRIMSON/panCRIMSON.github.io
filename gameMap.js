var gameMap = {
  mapa: null,

  init: function(rows, columns) {
    console.log("Stworzenie mapy map!")
    this.mapa = [];

    for (var x = 0; x < ROWS; x++) {
      this.mapa[x] = [];
      //console.log("Wiersz: " + x)
      for (var y = 0; y < COLS; y++) {
        this.mapa[x][y] = EMPTY;
        //console.log("Kolumna: " + y)
      }
    }
  },
  set: function(row, column, value) {
    this.mapa[row][column] = value;
  }
}
