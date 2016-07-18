var fs = require('fs');
var sortAllStrings = require('./solution');

fs.readFile('./strings.txt', function(err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    sortAllStrings(array);
});
