function reset(equation) { //sets calculator to base-state: 0, no functions active, etc.
    $("#textbox").val(equation);
    $(".fun").removeClass("activeFunction");
    $("#textbox").data("functionisActive", false);
    $("#textbox").data("theactiveFunction", "");
    $("#textbox").data("firstHeld", false);
    $("#textbox").data("secondHeld", false);
    $("#textbox").data("first", equation);
    $("#textbox").data("second", 0);
    $("#textbox").data("previous", false);
}

$(document).ready(function() {
  reset(0); //starts everything off at 0.
  $(".num").on('click', function() {
    if ($("#textbox").data("previous") === true) { //if textbox isn't empty, clear it, and start fresh.
        reset($(this).text());
    }
    else if (($("#textbox").data("functionisActive") === true) &&
             ($("#textbox").data("firstHeld") === false)) {
      $("#textbox").data("first", $("#textbox").val());
      $("#textbox").data("firstHeld", true); //locks the first number in place to store it for now
      $("#textbox").val($(this).text());
      $("#textbox").data("second", $("#textbox").val());
      $("#textbox").data("secondHeld", true);
    }
    else if (($("#textbox").data("functionisActive") === true) &&
             ($("#textbox").data("firstHeld") === true)) {
      var equation = $("#textbox").val();
      var newStuff = $(this).text();
      var newValue = equation + newStuff;
      $("#textbox").val(newValue);
      $("#textbox").data("second", $("#textbox").val());
      $("#textbox").data("secondHeld", true);
    }
    else {
      var equation = $("#textbox").val();
      if (equation === "0") {
        equation = "";
      }
      var newStuff = $(this).text();
      var newValue = equation + newStuff;
      $("#textbox").val(newValue);
    };
  });
  $(".fun").on('click', function() {
    if ($("#textbox").data("previous") === true) {
      reset($("#textbox").val());     //taking everything back
      $("#textbox").data("firstHeld", false);
      $("#textbox").data("previous", false)
    }
    var activeFunction = $(this).text();
    $("#textbox").data("functionisActive", true);
    $("#textbox").data("theactiveFunction", activeFunction);
    $(".fun").removeClass("activeFunction");
    $(this).addClass("activeFunction");
  });
  $('.equal').on('click', function() {
    result = 0;
    if (($("#textbox").data("firstHeld") === true) &&
       ($("#textbox").data("secondHeld") === true)) {

      if ($("#textbox").data("theactiveFunction") === '+') {
        result += (parseFloat($("#textbox").data("first")) +
        parseFloat($("#textbox").data("second")));
      }
      else if ($("#textbox").data("theactiveFunction") === '-') {
        result += (parseFloat($("#textbox").data("first")) -
        parseFloat($("#textbox").data("second")));
      }
      else if ($("#textbox").data("theactiveFunction") === '*') {
        result += parseFloat($("#textbox").data("first")) *
                  parseFloat($("#textbox").data("second"));
      }
      else if ($("#textbox").data("theactiveFunction") === '/') {
        result += parseFloat($("#textbox").data("first")) /
        parseFloat($("#textbox").data("second"));
      }
      else if ($("#textbox").data("theactiveFunction") === '**') {
        result += Math.round(Math.pow(parseFloat($("#textbox").data("first")),
        parseFloat($("#textbox").data("second")))*10)/10;
      }
      else if ($("#textbox").data("theactiveFunction") === "\u221a") {
        result += Math.round(Math.pow(parseFloat($("#textbox").data("first")),
        1/parseFloat($("#textbox").data("second")))*10)/10;
      }
      $("#textbox").val(result);
      Math.round(original*10)/10
      reset(result);
      $("#textbox").data("previous", true);
     }
     else {
     }
    });
   $("#clear").on('click', function(){
    reset("0");
  });
});
