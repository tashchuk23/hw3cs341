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

	  let numcherry = 0;
	  let numchoc = 0;
	  let numplain = 0;
	  var monthval = $(this).attr("value");
	   $("#dropbut").text(monthval);

	  //hw4:issue a POST to the server requesting orders
	  $.post('/orders', function(data,status){
	  let orders = JSON.parse(data);
	      let i = 0;
	      for(i = 0; i < orders.length; i++){
		  if(orders[i].topping == "plain"){
		      numplain = numplain + orders[i].quantity;
		  }
		   if(orders[i].topping == "chocolate"){
		      numchoc = numchoc + orders[i].quantity;
		   }
		   if(orders[i].topping == "cherry"){
		      numcherry = numcherry + orders[i].quantity;
		  }
	      }

	      //update li values
	      document.getElementById("cherryli").innerHTML = numcherry + " cherry";
	      document.getElementById("chocolateli").innerHTML = numchoc + " chocolate";
	      document.getElementById("plainli").innerHTML = numplain + " plain";
	      
	      
	  

	    });
	 });
  });





  
