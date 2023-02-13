const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", routes);

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to DB as:", db.threadId);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("listening on port:", port);
});
