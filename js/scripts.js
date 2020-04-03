// Business Logic

// function takes user's input and generates a list where numbers containg "1," "2," and "3," will be replaced with determined expected outputs of "beep," "boop," and "won't you be my neighbor?"

function robotoGenerator(number) {
  var numberLine = [];
  var computed = [];
  // creates a array of strings from "0" --> user's inputted number.

  for (i = 0; i <= number; i++) {
    numberLine.push(i.toString());  
  }
    // examines strings in numberLine and adds "beep," "boop," and "won't you be my neighbor?" + remaining numbers to results array, based on string values.

  for (i = 0; i <= number; i++) {
    if ( numberLine[i].includes("3") ) {
      computed.push("won't you be my neighbor " + $("input#userName").val() + "? ")
    }
    else if ( numberLine[i].includes("2") ) {
      computed.push("boop ")
    }
    else if ( numberLine[i].includes("1") ) {
      computed.push("beep ") 
    }
    else { computed.push(i.toString() + ", ") 
    }
  }
    return computed.join("");
    console.log(computed); 
 }


 // UI Logic

 $(document).ready(function() {
    $("form#numberForm").submit(function(event) {
      event.preventDefault();
      var number = $("input#userNumber").val();
      var output = robotoGenerator(number);
      $("#computed").show();
      $("#nonsense").text(output);
      $("#enter-page").hide();
      console.log(number);
    });
 });