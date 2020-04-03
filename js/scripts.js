// Business Logic

function robotoGenerator(number) {
  var computeNumbers = "";
  
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