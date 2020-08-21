const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Access api routes
app.use(routes);

// Connect to mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true });

// Static assets for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/index.html"));
}

// Api route for index.html on published build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});