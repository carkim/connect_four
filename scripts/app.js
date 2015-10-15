$('document').ready(function() {
  console.log("hella basic");

  //add event listeners to all divs
  $('.container').on('click', addColor);
});

var Board = {
  currentPlayer: $(this).addClass('blue'),
  winner: '',

startGame: function() {
  console.log('whyyyy');
  var blue = $(this).addClass('blue')
  var purple = $(this).addClass('purple')
  if (this.currentPlayer === $(.blue)) {
  this.currentPlayer = purple
  }

addColor: function() {
  console.log(this);
  $(this).addClass('blue');
}
