var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var admin = require('../../controllers/admin');


/*
Camera Store APIs Start
*/
router.route('/register')
  .post(admin.userRegister)

router.route('/login')
  .post(admin.userLogin)

router.route('/addProduct')
  .post(admin.addProduct)

router.route('/productList')
  .get(admin.listOfProduct)

router.route('/addToCart')
  .post(admin.addProductCart)

router.route('/userCart')
  .get(admin.cartByID)
/*
Camera Store APIs End
*/


module.exports = router; // Exporting router
