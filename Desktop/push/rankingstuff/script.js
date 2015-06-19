var data = [
  { name: 'Ryan', points: 14},
  { name: 'Colin', points: 7},
  { name: 'Tania', points: 9},
  { name: 'Nick', points: 21}
];

var leaderboard2 = function(data) {
  return data.sort(function(a,b){return b.points-a.points;})
}

function liCreate(name,points) {
  var li = $('<li>'+name+'</li>');
  li.append('<span>'+points+'</span>');
}

$(document).ready(function() {
  var page = ''
  var sorted = leaderboard2(data);
  for (var i=0; i<sorted.length; i++) {
    page += ('<div><p>'+sorted[i].name+' '+sorted[i].points+'</p></div>')
  }
  $('body').append(page)
})

//create elemtn $('<div>') $('<ul>') etc.
