
var response = require("./response");
var Constants = require("../utils/constants");


/* User Register
 */

exports.userRegister = (req, res) => {
  let sql = `INSERT INTO user (firstName, lastName, email, password, mobile, createdAt) VALUES (?, ?, ?, ?, ?, ?)`;
  con.query(
    sql,
    [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password,
      req.body.mobile,
      Date.now()
    ],
    (err, result) => {
      if (err) throw err;
      else if (result.length === 0) {
        response.onError(res, Constants.Strings.ERROR, 204);
      } else {
        response.onSuccess(res, {}, Constants.Strings.Register, 200);
      }
    }
  );
};

/* User Login
 */

exports.userLogin = (req, res) => {
  var password = req.body.password;
  var email = req.body.email;
  let sql =
    "SELECT u_id, email, firstName, lastName from user WHERE email = ? && password = ?";
    con.query(sql, [email, password], (err, result) => {
    if (err) throw err;
    else if (result.length == 0) {
      response.onError(res, Constants.Strings.USER_NOT_FOUND, 413);
    } else {
      response.onSuccess(res, result, Constants.Strings.Login, 200);
    }
  });
};


/* Add Product to list
 */

exports.addProduct = (req, res) => {
  let sql = `INSERT INTO product (name, description, price, making_year, createdAt) VALUES (?, ?, ?, ?, ?)`;
  con.query(
    sql,
    [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.making_year,
      Date.now()
    ],
    (err, result) => {
      if (err) throw err;
      else if (result.length === 0) {
        response.onError(res, Constants.Strings.ERROR, 204);
      } else {
        response.onSuccess(res, {}, Constants.Strings.ProductAdd, 200);
      }
    }
  );
};

/* 
  List Of Product
*/

exports.listOfProduct = (req, res) => {
  let sql = "SELECT * FROM product";
  con.query(sql, (err, result) => {
    if (err) throw err;
    else if (result.length === 0) {
      response.onError(res, Constants.Strings.DATA_NOT_FOUND, 204);
    } else {
      response.onSuccess(res, result, 200, Constants.Strings.Data_Fetch);
    }
  });
};

/* Add to cart
 */

exports.addProductCart = (req, res) => {
  let sql = `INSERT INTO cart (u_id, p_id, name, description, price, making_year, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  con.query(
    sql,
    [
      req.body.u_id,
      req.body.p_id,
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.making_year,
      Date.now()
    ],
    (err, result) => {
      if (err) throw err;
      else if (result.length === 0) {
        response.onError(res, Constants.Strings.ERROR, 204);
      } else {
        response.onSuccess(res, {}, Constants.Strings.Add, 200);
      }
    }
  );
};

/* 
  Cart details for specific user
*/

exports.cartByID = (req, res) => {
  let sql = "SELECT * FROM cart WHERE u_id = ?";
  con.query(sql, [req.body.u_id], (err, result) => {
    if (err) throw err;
    else if (result.length === 0) {
      response.onError(res, Constants.Strings.DATA_NOT_FOUND, 204);
    } else {
      response.onSuccess(res, result, 200, Constants.Strings.Data_Fetch);
    }
  });
};
