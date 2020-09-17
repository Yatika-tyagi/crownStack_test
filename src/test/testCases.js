var assert       = require('assert');
const mocha      = require('mocha');
const describe   = mocha.describe;
// const validation = require('../utils/validation');
// const JsonData   = require('../test/data/testJSON/pmc21');
const admin      = require('../controllers/admin');

  /*
  * Unit test cases for Register api  *
  */

    describe('#Register Api', function() {
      it('should return register Json', function(done) {
        var output = admin
        .post('/register ')
        .send({
            first_Name: "Yatika",
            last_Name: "Tyagi",
            email: "vdgc@cbs.com",
            password: "yatika@123",
            mobile: 8099081122
          })
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
          res.status.should.equal(200);
          res.body.error.should.equal(false);
          res.body.data.should.equal({
            responseCode: 200,
            result: {},
            success: true,
            message: "User has been registered successfully"
        });
          done();
        });
      });

      it("should return 204",function(done){
        var output = admin
        .post('/register ')
        .send({
            firstName: "Yatika",
            lastName: "Tyagi",
            email: "vdgc@cbs.com",
            password: "yatika@123",
            mobile: 8099081122
          })
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
          res.status.should.equal(204);
          res.body.error.should.equal(true);
          res.body.data.should.equal({
            responseCode: 204,
            success: false
        });
          done();
        });
      })
    });


     /*
  * Unit test cases for Login api  *
  */

 describe('#Login Api', function() {
    it('should return Login Details', function(done) {
      var output = admin
      .post('/login ')
      .send({
          email: "vdgc@cbs.com",
          password: "yatika@123",
        })
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res){
        res.status.should.equal(200);
        res.body.error.should.equal(false);
        res.body.data.should.equal({
            responseCode: 200,
            result: [
                {
                    "u_id": 1,
                    "email": "vdgc@cbs.com",
                    "firstName": "Yatika",
                    "lastName": "Tyagi"
                }
            ],
            success: true,
            message: "User has been login successfully"
      });
        done();
      });
    });

    it("should return 413",function(done){
      var output = admin
      .post('/login ')
      .send({
          firstName: "Yatika",
          lastName: "Tyagi",
        })
      .expect("Content-type",/json/)
      .expect(413)
      .end(function(err,res){
        res.status.should.equal(413);
        res.body.error.should.equal(true);
        res.body.data.should.equal({
          responseCode: 413,
          success: false
      });
        done();
      });
    })
  });