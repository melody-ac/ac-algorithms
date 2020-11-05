$(document).ready(function() {
  
    function makeMadLib(e) {
      e.preventDefault();
      var inputnoun = $( "#noun" ).val();
      var inputadjective = $( "#adjective" ).val();
      var inputperson = $("#person").val();
      var madLibObj = {
        noun: inputnoun,
        adjective: inputadjective,
        person: inputperson
      }
   
    $("#story").append(inputperson + " really loves " + inputadjective + " " + inputnoun +".");
       }
    $("#lib-button").click(function(e){
      makeMadLib(e);
    });
    
    
  
    
  });
  