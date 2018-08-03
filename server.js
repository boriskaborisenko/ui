const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

app.listen(3232, () => console.log('Example app listening on port 3232!'))