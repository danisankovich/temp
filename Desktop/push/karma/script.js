var $$ = {
  storeData: function() {
    localStorage["karma.data"] = JSON.stringify(this.data);
  },
  readData: function() {
    this.data = JSON.parse(localStorage["karma.data"]);
  },
  leaderboard: function() {
    return this.data.sort(this.compare);
  },
  compare: function (a, b){
    return b.points - a.points;
  },
  // modifyPointsFor(0, 2);
  modifyPointsFor: function(indexInArray, newPoints) {
    this.data[indexInArray].points = newPoints;
    this.storeData();
  },
  data: []
}

$(document).ready(function() {
  $$.readData();
  var sorted = $$.leaderboard();
  console.log("sorted: ", sorted);

  // var ppl = [];
  var $template = $(".person:first"), $clonedLi;
  // var $template = $("ul li:first"), $clonedLi;
  var ppl = sorted.map(function(p,i){
    $clonedLi = $template.clone().show();
   $clonedLi.find(".name").text(p.name);
   $clonedLi.find(".points").text(p.points);
   return $clonedLi;
  });

  // console.log("ppl: ", ppl);

  // var oneOfYou = sorted[5];
  // var $oneOfYou = $("ul li:first").clone().show();
  //
  //  $oneOfYou.find(".name").text(oneOfYou.name);
  //  $oneOfYou.find(".points").text(oneOfYou.points);

  //  ppl.push($oneOfYou);
   $("#ppl").append($oneOfYou);

   var oneOfYou = sorted[9];
   var $oneOfYou = $("ul li:first").clone().show();

   $oneOfYou.find(".name").text(oneOfYou.name);
   $oneOfYou.find(".points").text(oneOfYou.points);
   ppl.push($oneOfYou);
  // $("ul").append($oneOfYou);

  $("ul").append(ppl);


  // var $body = $("body");
  // var divArray = [];
  // for (var i = 0; i < sorted.length; i++) {
  //   var $div = $("<div>");
  //   var $p = $("<p>");
  //   $p.text(sorted[i].name + ' ' + sorted[i].points);
  //   $div.append($p);
  //   divArray.push($div);
  // }
  // $body.append(divArray);
})
