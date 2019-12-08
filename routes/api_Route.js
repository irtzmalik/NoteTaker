const fs = require("fs")
const path = require("path");
var notes;



module.exports = function (inp_obj) {
    fs.readFile("db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        notes = JSON.parse(data);
    })

    //load notes
    inp_obj.get("/api/notes", function (req, res) {
        
        res.json(notes);
    });

      // new note
    inp_obj.post("/api/notes", function (req, res)
     {
        
        var Note = req.body;
        notes.push(Note);
        let parsedata = JSON.stringify(notes)
        fs.writeFile(path.join('db/db.json'), parsedata, (err) => {
            if (err) throw err;
        })
    
        res.json(notes);
    });

    
  // delete notes
    inp_obj.delete("/api/notes/:id", function (req, res) {
        
        var delete_Note = req.params.id;
       
        for (i=0; i<notes.length; i++) {

            if (delete_Note === notes[i].title) {
                notes.splice(i, 1)
            };
        };
        
        
        let Updated_Notes = JSON.stringify(notes)
        
        fs.writeFile(path.join('db/db.json'), Updated_Notes, (err) => {
           if (err) throw err;
       })
        
        res.json(notes)
    })}


  