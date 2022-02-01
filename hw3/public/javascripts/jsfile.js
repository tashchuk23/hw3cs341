//Natalie Tashchuk



  $(document).ready(function(){
      $("#orderconf").hide();
      $("#orderb").click(function(){
	    var mess = $("#texta").val();
	  if (mess.toLowerCase().indexOf("vegan") >= 0){
	      alert("Cheesecake contains dairy");
	  } else {
              alert($().jquery);
	      $(".formc").hide();
	      $("#orderconf").delay(300).slideDown(400);
	      var quantity =  $("#qops").val();
	      var whichtop = $('input[name="topping"]:checked').val();
	      document.getElementById("orderconf").innerHTML +=
		   quantity + " pieces of " + whichtop + " with the note: " + mess;
	  } 
      });
    });

  $(document).ready(function(){
	$("a.month").click(function(){
		var monthval = $(this).attr("value");
		$("#dropbut").text(monthval);	
	 });
  });





  
