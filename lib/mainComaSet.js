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

  //両軍のRookをセット
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      var checkx = (i==0 || i==7) && ((j <= 1) || (j >= 6));
      var checkz = (j==0 || j==7) && ((i <= 1) || (i >= 6));
      if(checkx  || checkz){
        mainGameField.map.cell3d[i][0][j] = new rook(0);
        mainGameField.map.cell3d[i][7][j] = new rook(1);
      }
    }
  }
  
  //両軍のKnightをセット
  for(var i = 1; i < 7; i++){
    for(var j = 1; j < 7; j++){
      var checkx = (i==1 || i==6) && ((j <= 2) || (j >= 5));
      var checkz = (j==1 || j==6) && ((i <= 2) || (i >= 5));
      if(checkx  || checkz){
        mainGameField.map.cell3d[i][0][j] = new knight(0);
        mainGameField.map.cell3d[i][7][j] = new knight(1);
      }
    }
  }

  //両軍のBishopをセット
  for(var i = 2; i < 6; i++){
    for(var j = 2; j < 6; j++){
      var checkx = (i==2 || i==5);
      var checkz = (j==2 || j==5);
      if(checkx  || checkz){
        mainGameField.map.cell3d[i][0][j] = new bishop(0);
        mainGameField.map.cell3d[i][7][j] = new bishop(1);
      }
    }
  }

  mainGameField.map.cell3d[3][0][3] = new queen(0);
  mainGameField.map.cell3d[4][0][4] = new queen(0);
  mainGameField.map.cell3d[3][0][4] = new queen(0);
  mainGameField.map.cell3d[3][7][3] = new queen(1);
  mainGameField.map.cell3d[4][7][4] = new queen(1);
  mainGameField.map.cell3d[3][7][4] = new queen(1);

  mainGameField.map.cell3d[4][0][3] = new whiteKing();
  mainGameField.map.cell3d[4][7][3] = new blackKing();

}

