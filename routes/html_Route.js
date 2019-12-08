var path = require("path");

module.exports = function(inp_obj) {

    inp_obj.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "/notes.html"));
    });

    inp_obj.get("../assets/js/index.js", function(req,res){
        res.sendFile(path.join(__dirname, "/assets/js/index.js"))
    });
    inp_obj.get("../assets/css/styles.css", function(req,res){
        res.sendFile(path.join(__dirname, "/assets/css/styles.css"))
    });

    inp_obj.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/index.html"));
      });
}