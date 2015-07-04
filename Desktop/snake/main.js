var speed = 100;
var score = 0;
$(document).ready(function(){
  $('#difficulty').change(function(){
    speed = parseInt($('input:radio[name=difficulty]:checked').val());
  });
  $('button').click(function(){
    gameStart();
  });
  return speed;
});
var direction='down';
var snake=["3_10","2_10","1_10"];
var foodLocation="";

function gameStart(){
  direction='down';
  snake=["3_10","2_10","1_10"];
  foodLocation="";
  score = 0;
  $('#score').html('Player Score: ' + score);
  $('#mainBoard').html("");
  for (var row=0;row<20;row++){
    for (var column=0;column<20;column++) {
      $('#mainBoard').append('<div class=boardCell id=column_'+row+'_'+column+'></div>');
    }
  }
  $('#column_1_10').addClass('blob');
  $('#column_2_10').addClass('blob');
  $('#column_3_10').addClass('blob');
  placeFood();
  setTimeout(function() {
    boardUpdate();
    }, speed);
}

function placeFood(){
  var randRow = Math.floor(Math.random() * 19);
  var randColumn = Math.floor(Math.random() * 19);
  $('#column_'+randRow+'_'+randColumn).addClass('food');
  foodLocation=''+randRow+'_'+randColumn;
}
function boardUpdate(){
  var tailPiece=snake.pop();
  $('#column_'+tailPiece).removeClass('blob');
  var snakeHead=snake[0];
  var rowColumn=snakeHead.split("_");
  var row=parseInt(rowColumn[0]);
  var column=parseInt(rowColumn[1]);
  switch(direction){
    case 'down':
      row=row+1;
      break;
    case 'left':
      column=column-1;
      break;
    case 'up':
      row=row-1;
      break;
    case 'right':
      column=column+1;
      break;
  }
  var headNow=""+row+"_"+column;
  if (headNow==foodLocation){
    snake.push(tailPiece);
    $('#column_'+tailPiece).addClass('blob');
    $('#column_'+foodLocation).removeClass('food');
    score +=10;
    $('#score').html('Player Score: ' + score);
    placeFood();
  }
  snake.unshift(headNow);
  $('#column_'+headNow).hasClass('blob');
  if (column<0 || row<0 || column>19 || row>19 ||  $('#column_'+headNow).hasClass('blob') ){
    alert('You Ate Yourself');
    return;
  }
  $('#column_'+headNow).addClass('blob');
  setTimeout(function() {
    boardUpdate();
    }, speed);
}
$(document).keydown(function(e){
  if (direction !== 'right' && e.keyCode == 37) {
    direction='left';
  }
  else if (direction !== 'down' && e.keyCode == 38) {
    direction='up';
  }
  else if (direction !== 'left' && e.keyCode == 39) {
    direction='right';
  }
  else if (direction !== 'up' && e.keyCode == 40) {
    direction='down';
  }
});
