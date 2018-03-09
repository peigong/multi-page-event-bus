var express = require('express');
var app = express();

app.use(express.static('dist'));
app.use(express.static('stub'));
app.use('/a', express.static('stub'));
app.use('/a/b', express.static('stub'));
app.use('/a/b/c', express.static('stub'));

var server = app.listen(3030, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('stub app listening on 3030');
});
