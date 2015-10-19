

function Game() {
  this.winner = null;
  this.playerOne = "";
  this.playerTwo = "";
  this.board = new Board();
  this.currentPlayer = "";
  this.startGame = function() {
    this.board.setUp();
    //set playerOne and color
    this.playerOne = prompt("Player 1, what is your name?");
    //set playerTwo and color
    this.playerTwo = prompt("Player 2, what is your name?");
    //set currentPlayer
    this.currentPlayer = "yellow"
    var game = this;
    $('#board-perimeter').on('click', '.column', function (e)
       {
         var chipId = e.target.id;
         console.log("id:"+chipId);
         game.makePlay(chipId);
  });
}
  //getting the piece to display on board
  this.makePlay = function(chipId){
    //finds cell to update
    console.log("columnId*" + chipId);

    var columnId = parseInt(chipId[4]); //gets the 4th character (column) from cellid div
    var rowId = parseInt(chipId[5]); //gets the 5th character (row) from cellid div
    this.board.placePiece(columnId, this.currentPlayer);
    //swap currentPlayer
    console.log("columnId*" + columnId);
    if (this.currentPlayer == "yellow"){
      this.currentPlayer = "red";
    } else if (this.currentPlayer == "red"){
      this.currentPlayer = "yellow";
    }
    this.checkWin(columnId, rowId);
  }
  //check for 4 in a row
  this.checkWin = function(columnId, rowId){

    var cellColor = this.board.cells[columnId][rowId];
    console.log(cellColor);
    if (rowId <= 2) {
      if  ((cellColor == this.board.cells[columnId][rowId + 1]) &&
        (cellColor == this.board.cells[columnId][rowId + 2]) &&
        (cellColor == this.board.cells[columnId][rowId + 3])) {
          this.reportWinner(cellColor);
        }
      } else {
          console.log("866"+columnId + rowId);
          this.rowWin(columnId, rowId);

      };
    };

    this.rowWin = function(columnId, rowId){
      var aWin = false;
      var cellColor = this.board.cells[columnId][rowId];
      if ((3 <= columnId) && (columnId <= 6)) {
        console.log("line62" + columnId);
        if  ((cellColor == this.board.cells[columnId - 1][rowId]) &&
            (cellColor == this.board.cells[columnId - 2][rowId]) &&
            (cellColor == this.board.cells[columnId - 3][rowId])) {
              console.log("**left");
              //this.reportWinner(cellColor);
              aWin = true;
            }
      }
     if ((2 <= columnId) && (columnId <=5)) {
        if ((cellColor == this.board.cells[columnId + 1][rowId]) &&
          (cellColor == this.board.cells[columnId - 1][rowId]) &&
          (cellColor == this.board.cells[columnId - 2][rowId])) {
            console.log("**mid1")
            //this.reportWinner(cellColor);
            aWin = true;
          }
      }
      if ((1 <= columnId) && (columnId <= 4)) {
        if ((cellColor == this.board.cells[columnId + 1][rowId]) &&
          (cellColor == this.board.cells[columnId + 2][rowId]) &&
          (cellColor == this.board.cells[columnId - 1][rowId])) {
            console.log("**mid2");
            //this.reportWinner(cellColor);
            aWin = true;
        }
      }
     if ((0 <= columnId) && (columnId<= 3)) {
        if ((cellColor == this.board.cells[columnId + 1][rowId]) &&
          (cellColor == this.board.cells[columnId + 2][rowId]) &&
          (cellColor == this.board.cells[columnId + 3][rowId])) {
            console.log("**right");
            //this.reportWinner(cellColor);
            aWin = true;
        }
      }
      if (aWin == true) {
        this.reportWinner(cellColor);
      } else {
          console.log("no row win");
          //this.diagonalWin(columnId, rowId);
      }
    };

    // this.diagonalWin = function(columnId, rowId){
    //   var aWin = false;
    //   var cellColor = this.board.cells[columnId][rowId];
    //   if ((3 <= columnId) && (columnId <= 6) && (3 <= rowId) && (rowId <= 5)) {
    //     console.log("diagonalA**");
    //     if  ((cellColor == this.board.cells[columnId - 1][rowId - 1]) &&
    //         (cellColor == this.board.cells[columnId - 2][rowId - 2]) &&
    //         (cellColor == this.board.cells[columnId - 3][rowId - 3])) {
    //         //this.reportWinner(cellColor);
    //         aWin = true;
    //     }
    //   }
    //   if ((2 <= columnId) && (columnId <= 5) && (2 <= rowId) && (rowId <= 4)) {
    //     console.log("diagonalB**");
    //     if ((cellColor == this.board.cells[columnId + 1][rowId + 1]) &&
    //       (cellColor == this.board.cells[columnId - 1][rowId - 1]) &&
    //       (cellColor == this.board.cells[columnId - 2][rowId - 2])) {
    //       //this.reportWinner(cellColor);
    //       aWin = true;
    //     }
    //   }
    //   if ((1 <= columnId) && (columnId <= 4) && (1 <= rowId) && (rowId <= 3)) {
    //     console.log("diagonalC**");
    //     if ((cellColor == this.board.cells[columnId + 2][rowId + 2]) &&
    //       (cellColor == this.board.cells[columnId + 1][rowId + 1]) &&
    //       (cellColor == this.board.cells[columnId - 1][rowId - 1])) {
    //       //this.reportWinner(cellColor);
    //       aWin = true;
    //     }
    //   }
    //   if ((0 <= columnId) && (columnId <= 3) && (0 <= rowId) && (rowId <= 2)) {
    //     console.log("diagonalD**");
    //     if ((cellColor == this.board.cells[columnId + 1][rowId + 1]) &&
    //       (cellColor == this.board.cells[columnId + 2][rowId + 2]) &&
    //       (cellColor == this.board.cells[columnId + 3][rowId + 3])) {
    //       //this.reportWinner(cellColor);
    //       aWin = true;
    //     }
    //   }
    //   if ((0 <= columnId) && (columnId <= 3) && (3 <= rowId) && (rowId <= 5)) {
    //     console.log("diagonalE**");
    //     if ((cellColor == this.board.cells[columnId + 1][rowId - 1]) &&
    //       (cellColor == this.board.cells[columnId + 2][rowId - 2]) &&
    //       (cellColor == this.board.cells[columnId + 3][rowId - 3])) {
    //       //this.reportWinner(cellColor);
    //       aWin = true;
    //     }
    //   }
    //   if ((1 <= columnId) && (columnId <= 4) && (2 <= rowId) && (rowId <= 4)) {
    //     console.log("diagonalF**");
    //     if ((cellColor == this.board.cells[columnId - 1][rowId + 1]) &&
    //       (cellColor == this.board.cells[columnId + 1][rowId - 1]) &&
    //       (cellColor == this.board.cells[columnId + 2][rowId - 2])) {
    //       //this.reportWinner(cellColor);
    //       aWin = true;
    //     }
    //   }
    //   if ((2 <= columnId) && (columnId <= 5) && (1 <= rowId) && (rowId <= 3)) {
    //     console.log("diagonalG**");
    //    if ((cellColor == this.board.cells[columnId - 2][rowId + 2]) &&
    //       (cellColor == this.board.cells[columnId - 1][rowId + 1]) &&
    //       (cellColor == this.board.cells[columnId + 1][rowId - 1])) {
    //       //this.reportWinner(cellColor);
    //       aWin = true;
    //     }
    //   }
    //   if ((3 <= columnId) && (columnId <= 6) && (0 <= rowId) && (rowId <=2)) {
    //     console.log("diagonalH**");
    //     if ((cellColor == this.board.cells[columnId - 1][rowId + 1]) &&
    //       (cellColor == this.board.cells[columnId - 2][rowId + 2]) &&
    //       (cellColor == this.board.cells[columnId - 3][rowId + 3])) {
    //       //this.reportWinner(cellColor);
    //       aWin = true;
    //     }
    //   }
    //   // else {
    //   //     this.reportWinner(cellColor);
    //   //   }
    //   // };
    //   if (aWin == true) {
    //       this.reportWinner(cellColor);
    //   } else {
    //       console.log("no row win");
    //       this.reportWinner("tie");
    //   }
    // };


  this.reportWinner = function(cellColor){
    if (cellColor == "yellow") {
      alert("Player One wins Connect 4!");
    } else if (cellColor = "red") {
      alert("Player Two wins Connect 4!");
    } else if (cellColor = "tie") {
      alert("There is a tie!")
    }
  };
};



function Board() {
  this.cells = []
  //cells that are playable
  this.playableRows = []
  this.setUp = function(){
    var makeColumn = function(){
      return [null, null, null, null, null, null];
    };
    this.cells = [makeColumn(), makeColumn(), makeColumn(),
      makeColumn(), makeColumn(), makeColumn(), makeColumn()];
    this.playableRows = [5, 5, 5, 5, 5, 5, 5];
  };
  this.placePiece = function(column, player) {
    //updates cells, from null to playercolor and fills color
    //console.log("placePiece")
    //console.log("col:"+column);
    //console.log("playableRow:"+this.playableRows[column]);
    this.cells[column][this.playableRows[column]] = player;
    //console.log("column:"+column+"\n"+"row:"+this.playableRows[column]);
    var pieceId = "#cell" + (column).toString() + (this.playableRows[column]).toString()
    $(pieceId).css('background-color', player);
    //console.log("pieceId:"+pieceId);
    //updating playableRows
    this.playableRows[column] = this.playableRows[column] - 1;
    //console.log("End of placePiece")
    //console.log("col:"+column);
    //console.log("playableRow:"+this.playableRows[column]);
  };
};



function Cell() {
  this.piece = null
};

function Piece() {
  this.player = null
};

function Player() {
  this.color = "";
  this.name = "";
};
