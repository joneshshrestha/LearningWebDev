let express = require("express")

let app = express()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    res.send("Thanks for posting")
})

app.listen(3000, function(){
    console.log("Listening at Port 3000")
})