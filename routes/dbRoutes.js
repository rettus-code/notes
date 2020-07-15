var db = [];
var app = require("express").Router();
var fs = require("fs")


app.get("/api/notes", function (req, res) {
  console.log("get", db)
  db = JSON.parse(fs.readFileSync("./db/db.json","utf8"))
  res.json(db);
});

app.post("/api/notes", function (req, res) {
  let notes = {
    id: Math.floor(Math.random() * 100) + db.length,
    title: req.body.title,
    text: req.body.text
  };
  db.push(notes);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), ()=>{
   console.log("route", db)
  res.json(db);
  })
});
app.delete("/api/notes/:id", function (req, res) {
  var tempArr = [];
  for (var i=0; i<db.length; i++){
    if(parseInt(db[i].id)!==parseInt(req.params.id)){
      tempArr.push(db[i])
    }
  }
  
  db = tempArr;
  console.log("delete", db);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), ()=>{
   console.log("route", db)
   res.json(db);
  })
   
});
module.exports = app;