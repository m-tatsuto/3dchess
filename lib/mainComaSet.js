/**
 * メインゲームのマップを設定をする
 */
function setInitMapObject(){
  var mainMap = new map3D();
  var mainZone1 = new stockZone0();
  var mainZone2 = new stockZone1();

  mainGameField = new gameField(mainMap,mainZone1,mainZone2);
  console.log(mainGameField);

  setComaInitObjectInMainMap();
}

/**
 * メインゲームの駒をマップに設定する
 */
function setComaInitObjectInMainMap(){

  //両軍のポーンを設置
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      mainGameField.map.cell3d[i][1][j] = new pawn(0);
      mainGameField.map.cell3d[i][6][j] = new pawn(1);
    }
  }

  mainGameField.map.cell3d[4][0][3] = new whiteKing();
  mainGameField.map.cell3d[4][7][3] = new blackKing();

}

