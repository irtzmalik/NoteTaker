const express = require("express");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Creating Routes
require("./routes/api_Route")(app);
require("./routes/html_Route")(app);

// Server Start
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });