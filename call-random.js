var getOrders = function() {

    var fs = require('fs');
    var getSpotify = require('./spotify');

    function read(file, callback) {
        fs.readFile(file, 'utf8', function(err, data) {
            if (err) {
                console.log(err);
            }
              getSpotify(data);
            
        });
    }
    
    var output = read('random.txt', function(data) {
        console.log(data);
    });
}

module.exports = getOrders;