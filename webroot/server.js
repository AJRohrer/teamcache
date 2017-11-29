var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-test",{ useMongoClient: true });
var nameSchema = new mongoose.Schema({
    proname: {type:String},
    detailmain: {type:String},
    // details: [Schema.Types.Mixed]
},{strict: false});

var User = mongoose.model("Project", nameSchema);

app.use(express.static(__dirname + '/MainPagev3'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/MainPagev3/mainpage.html");
});

app.post("/addproject", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Project saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});