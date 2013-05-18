/**
 * テスト用マップ描画
 */
function mapControllerDisplay(){
  var selectObj = null;
  var count = 0;

  document.getElementById("setcoma").innerHTML = "空盤</br>";

  var tableHtmlSource = "";

  for(var i = 0; i < 8; i++){
    tableHtmlSource = "";
    tableHtmlSource += "<table border='1' cellspacing='0' cellpadding='5' >\n";
    tableHtmlSource += "<tr><th colspan='9'>" + (7 - i) +"層 </th></tr>";

    for(var j = 0; j < 8; j++){
      tableHtmlSource += "<tr>\n";

      for(var h = 0; h < 8; h++){
        var positionX = h;
        var positionY = focusViewFlag ? j : (7 - j);
        //var positionY = 8 - j;
        var positionZ = 7 - i;
        selectObj = mainGameField.map.cell3d[positionX][positionY][positionZ];

        var selectDomComaObjectParam = positionX + ',' + positionY + ',' + positionZ;
        var clickfunctionString = "selectDomComaObject(" + selectDomComaObjectParam + ")";
        var moveableColor = "";
        if (touchComaObject && !selectStockFlag) {
          var moveNum = searchComaMoveNum(positionX, positionY, positionZ);

          if (moveNum !== false) {
            moveableColor = "bgcolor='#ffff00'";
            clickfunctionString = "moveDomComaObject(" + selectDomComaObjectParam + ")";
          }

          if ((nowSelectPosition[0] == positionX) && (nowSelectPosition[1] == positionY) && (nowSelectPosition[2] == positionZ)) {
            moveableColor = "bgcolor='#999900'";
          }
        }


        if(selectObj !== null){

          if ( ( ( selectObj.camp == 0 ) && ( focusViewFlag == 0 ) ) || ( ( selectObj.camp == 1 ) && ( focusViewFlag == 1 ) ) ) {  
            tableHtmlSource += " <td width='30' height='30' " + moveableColor + " onclick='" + clickfunctionString + "' class='sentecoma'>" + displayComaObjectFont(selectObj.name, selectObj.camp) + "</td>\n";
          } else if ( ( ( selectObj.camp == 1 ) && ( focusViewFlag == 0 ) ) || ( ( selectObj.camp == 0 ) && ( focusViewFlag == 1 ) ) ) {
            tableHtmlSource += " <td width='30' height='30' " + moveableColor + " onclick='" + clickfunctionString + "' class='gotecoma'>" + displayComaObjectFont(selectObj.name, selectObj.camp) + "</td>\n";
          }

          selectObj = null;
        } else {

          if(selectStockFlag) {
            moveableColor = "bgcolor='#00ff00'";
            clickfunctionString = "setDomStockComaObject(" + selectDomComaObjectParam + ")";
          }

          tableHtmlSource += " <td  width='30' height='30' " + moveableColor + " onclick='" + clickfunctionString + "'></td>\n";
        }

      }

      tableHtmlSource += "</tr>\n";
    }

    tableHtmlSource += "</table>\n";
    document.getElementById("setcoma").innerHTML += tableHtmlSource + "</br>";
  }

  var zone0 = mainGameField.zone0;
  var zone1 = mainGameField.zone1;
  var stockComaCounterZone0 = {
	  "Pawn" : 0,
	  "Knight" : 0,
	  "Bishop" : 0,
	  "Rook" : 0,
	  "Queen" : 0
  };
  var stockComaCounterZone1 = {
	  "Pawn" : 0,
	  "Knight" : 0,
	  "Bishop" : 0,
	  "Rook" : 0,
	  "Queen" : 0
  };

  document.getElementById("zone0Coma").innerHTML = "□</br>";

  var zone0Len = zone0.stock.length;
  for (var i = 0; i < zone0Len; i++){
    stockComaCounterZone0[ zone0.stock[i].name ]++;
    if ( stockComaCounterZone0[ zone0.stock[i].name ] <= 1 ) {
	    var functionString = "selectStockTest(0," + i + ")";
	    document.getElementById("zone0Coma").innerHTML +=  displayComaObjectFont(zone0.stock[i].name, 1) + "<span id='zone0NumberOf" + zone0.stock[i].name + "'></span></br>";
    } else if ( stockComaCounterZone0[ zone0.stock[i].name ] > 1 ) {
	    document.getElementById("zone0NumberOf" + zone0.stock[i].name).innerHTML = "x" + stockComaCounterZone0[ zone0.stock[i].name ];
    }
  }

  document.getElementById("zone1Coma").innerHTML = "■</br>";

  var zone1Len = zone1.stock.length;
  for (var i = 0; i < zone1Len; i++){
    stockComaCounterZone1[ zone1.stock[i].name ]++;
    if ( stockComaCounterZone1[ zone1.stock[i].name ] <= 1 ) {
	    var functionString = "selectStockTest(1," + i + ")";
	    document.getElementById("zone1Coma").innerHTML += displayComaObjectFont(zone0.stock[i].name, 0) + "<span id='zone1NumberOf" + zone1.stock[i].name + "'></span></br>";
    } else if ( stockComaCounterZone1[ zone1.stock[i].name ] > 1 ) {
	    document.getElementById("zone1NumberOf" + zone1.stock[i].name).innerHTML = "x" + stockComaCounterZone1[ zone1.stock[i].name ];
    }
  }

  var turnString = "";
  if (turncamp == 0) {
    turnString = "Turn White";
  } else if (turncamp == 1) {
    turnString = "Turn Black";
  }

  document.getElementById("turnDiplay").innerHTML = turnString;
  return true;
}

function selectDomComaObject(x, y, z) {
  addObjectSelectPosition( x, y, z );  
  document.getElementById("positionValue").innerHTML = x + "" + y + "" + z;
  selectPosition( x, y, z );
  addObjectMoveablePosition();
  setThreeJs3dMapObject();
}

/**
 * 選択した駒を動かす
 */
function moveDomComaObject(x, y, z) {
  if (confirm(x + "" + y + "" + z + "に移動しますか？")) {
    threeJsMoveAnimation( x, y, z );
    movePosition( x, y, z );
  }
  resetObjectSelect();  
  resetObjectMoveablePosition();
}

/**
 * 選択した駒をMapにセットする
 */
function setDomStockComaObject(x, y, z) {
  if (confirm(x + "" + y + "" + z + "に置きますか？")) {
    setStockTest(x, y, z);
  }
}

function gameRestart() {
  if (confirm( "ゲームをリセットしますか？" )) {
    mainGameStart();
    resetObjectSelect();  
    resetObjectMoveablePosition();
  }
}

function displayComaObjectFont(comaName, camp) {
  var displayFonts = {
    "Pawn"      : { 0 : "p", 1 : "o" },
    "Rook"      : { 0 : "r", 1 : "t" },
    "Knight"    : { 0 : "h", 1 : "j" },
    "Bishop"    : { 0 : "b", 1 : "n" },
    "Queen"     : { 0 : "q", 1 : "w" },
    "WhiteKing" : { 0 : "k" },
    "BlackKing" : { 1 : "l" },
  };

  return displayFonts[comaName][camp];
}

window.addEventListener("DOMContentLoaded", mainGameStart, false);
