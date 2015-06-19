$.ajax(localhost:8000Users/msankovich/Desktop/rankingstuff/data.json, function(json) {
    console.log(data);
});

var leaderboard2 = function(data) {
  return data.sort(function(a,b){return b.points-a.points;})
}

function liCreate(name,points) {
  var li = $('<li>'+name+'</li>');
  li.append('<span>'+points+'</span>');
}

$(document).ready(function() {
  $('body').append($('<div>').addClass('rank'));
  var sorted = leaderboard2(data);
  var newarray =[];
  for (var i=0; i<sorted.length; i++) {
    newarray.push('<div><p>'+sorted[i].name+' '+sorted[i].points+'</p></div>');
  }
  $('.rank').append(newarray)
});

//create elemtn $('<div>') $('<ul>') etc.
