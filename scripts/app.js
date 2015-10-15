$('document').ready(function() {
  console.log("hella basic");

  //add event listeners to all divs
  $('.container').on('click', addColor);
});
var Board = {
  currentPlayer: '',
  winner: '',
}

var startGame = function() {
  console.log('whyyyy');
  this.currentPlayer
}

var addColor = function() {
  console.log(this);
  $(this).addClass('filled');
}
