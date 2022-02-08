var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();

//js file to handle the contain function that handles
//request for particular month's orders

//currently replies with the same, hardcoded orders data



//create array of JSON objects

/*let ordersarray = [
    {
	"topping": "plain",
	"quantity": 1
    },
    
    {
	"topping": "chocolate",
	"quantity": 2
    },
    {
	"topping": "cherry",
	"quantity": 4
    }
]

*/

//get data 

    let order0 = {
	topping: 'plain',
	quantity: 1
    };
	  
	let order1 = {
	topping: 'cherry',
	quantity: 2
    };
	  
	let order2 = {
	topping: 'chocolate',
	quantity: 3
    };
	

    let ordersarray = [
	    order0,
	    order1,
	    order2
    ];
 	
   
router.get('/', function (req, res, next) {
      res.json(ordersarray);
});

//post new data to the server

router.post('/', function(req, res, next){
    res.send(JSON.stringify(ordersarray));
});



module.exports = router;

