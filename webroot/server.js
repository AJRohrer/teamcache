const express = require('express');
const app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname,'MainPagev3/index.html')));

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log('Magic happens on port' + port);
});

// express.static(webroot)

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(3000, () => console.log('Example app listening on port 3000!'))