$(document).ready(function() {
  $('form#animals').submit(function(event){
  event.preventDefault();
  const favoriteAnimal = $("input:radio[name=animal]:checked").val();
  if (favoriteAnimal === "parrot") {
    $("#parrot").show();
    $("#bear").hide();
    $("#cat").hide();

  } else if (favoriteAnimal === "bear") {
    $("#bear").show();
    $("#parrot").hide();
    $("#cat").hide();  
  } else if (favoriteAnimal === "cat") {
    $("#cat").show();
    $("#parrot").hide();
    $("#bear").hide();      
  }  
  });
});