var myTestFoo = {

         powerNumb : function(number, power) {
            var myResult = 1;

            if (number === 0 && power === 0) {
                return 1;
            }

            if (power < 0) {
                for (var i = 0; i > power; i--) {
                    myResult *= number;
                }
                return 1 / myResult;
            }

            for (var k = 0; k < power; k++) {
                myResult *= number;
            }
            return myResult;
        },

         userLogin : function( myName) {
            var
                text = 'Good bye!';
            users = [ 'John', 'Alex','Peter', 'Ivan'];
            // myName = 'Alex';

            // for (var i = 0; i < 5; i++) {
            //     users.push(prompt('Enter any name', ""));
            // }

            for (i = 0; i < users.length; i++) {
                if (users[i] == myName) {
                    text = 'Hello!' + ' ' + myName;
                }
            }
            return text;
        }


};

module.exports = myTestFoo;
