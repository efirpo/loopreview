// Business Logic

function robotoGenerator(number) {
  var numberLine = [];
  var results = [];

  // creates a array of strings from 0 -> user's inputted number.

  for (i = 0; i <= number; i++) {

    numberLine.push(i.toString());
    
  }

 }


 // UI Logic

 $(document).ready(function() {
    $("form#numberForm").submit(function(event) {
      event.preventDefault();
      var number = $("input#userInput").val();
      var output = robotoGenerator(number);
      $("#computed").show(output);
      console.log(number);
    });
 });