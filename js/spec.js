var myTestFoo = require('../js/module.js');

describe("myTestFoo", function() {


  it("powerNumb()", function() {

    var result;
    result = myTestFoo.powerNumb(3,2);

    expect(result).toBe(9);
  });
  it("powerNumb()", function() {

    var result;
    result = myTestFoo.powerNumb(0,5);

    expect(result).toBe(0);
  });
  it("userLogin()", function() {

    var result;
    result = myTestFoo.userLogin('Alex');

    expect(result).toEqual('Hello!' + ' ' + 'Alex');
  });
  it("userLogin()", function() {

    var result;
    result = myTestFoo.userLogin('Vasya');

    expect(result).toEqual('Good bye!');
  });
});
