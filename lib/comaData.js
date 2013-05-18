/**
 * ポーンのオブジェクト
 */
var pawn = function (camp){
  this.name = "Pawn";
  this.relativePoint = [[0, 1, 0], [0, 0, 1], [0, 0, -1]];
  this.camp = camp;
};

/**
 * Knightのオブジェクト
 */
var knight = function(camp){
  this.name = "Knight";
  this.relativePoint = [[-1, 2, 1], [1, 2, 1], [-1, 2, -1], [1, 2, -1],
                        [-1, -2, 1], [1, -2, 1], [-1, -2, -1], [1, -2, -1],
                        [-1, 1, 2], [1, 1, 2], [-1, -1, 2], [1, -1, 2],
                        [-1, 1, -2], [1, 1, -2], [-1, -1, -2], [1, -1, -2],
                        [2, 1, -1], [2, 1, 1], [2, -1, -1], [2, -1, 1],
                        [-2, 1, -1], [-2, 1, 1], [-2, -1, -1], [-2, -1, 1],];
  this.camp = camp;
}

/**
 * Bishopのオブジェクト
 */
var bishop = function(camp){
  this.name = "Bishop";
  this.relativePoint = "";
  this.checkMoveable = [[-1, 1, 1], [1, 1, 1], [-1, -1, 1], [1, -1, 1], [-1, 1, -1], [1, 1, -1], [-1, -1, -1], [1, -1, -1]];
  this.camp = camp;
}

/**
 * Rookのオブジェクト
 */
var rook = function(camp){
  this.name = "Rook";
  this.relativePoint = "";
  this.checkMoveable = [[0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]];
  this.camp = camp;
};

/**
 * Queenのオブジェクト
 */
var queen = function(camp){
  this.name = "Queen";
  this.relativePoint = "";
  this.checkMoveable = [[0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1],[-1, 1, 1], [1, 1, 1], [-1, -1, 1], [1, -1, 1], [-1, 1, -1], [1, 1, -1], [-1, -1, -1], [1, -1, -1]];
  this.camp = camp;
  this.preComa = null;
};

/**
 * WhiteKingのオブジェクト
 * 先手の駒として使う
 */
var whiteKing = function(){
  this.name = "WhiteKing";
  this.relativePoint = [[-1, 1, 0], [0, 1, 0], [1, 1, 0], [-1, 0, 0], [1, 0, 0], [-1, -1, 0], [0, -1, 0], [1, -1, 0], 
                       [-1, 1, 1], [0, 1, 1], [1, 1, 1], [-1, 0, 1], [0, 0, 1], [1, 0, 1], [-1, -1, 1], [0, -1, 1], [1, -1, 1], 
                       [-1, 1, -1], [0, 1, -1], [1, 1, -1], [-1, 0, -1], [0, 0, -1], [1, 0, -1], [-1, -1, -1], [0, -1, -1], [1, -1, -1]];
  this.camp = 0;
};

/**
 * BlackKingのオブジェクト
 * 後手の駒として使う
 */
var blackKing = function(){
  this.name = "BlackKing";
  this.relativePoint = [[-1, 1, 0], [0, 1, 0], [1, 1, 0], [-1, 0, 0], [1, 0, 0], [-1, -1, 0], [0, -1, 0], [1, -1, 0], 
                       [-1, 1, 1], [0, 1, 1], [1, 1, 1], [-1, 0, 1], [0, 0, 1], [1, 0, 1], [-1, -1, 1], [0, -1, 1], [1, -1, 1], 
                       [-1, 1, -1], [0, 1, -1], [1, 1, -1], [-1, 0, -1], [0, 0, -1], [1, 0, -1], [-1, -1, -1], [0, -1, -1], [1, -1, -1]];
  this.camp = 1;
};
