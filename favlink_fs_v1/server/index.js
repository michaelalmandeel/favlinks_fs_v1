const express = require("express");

const path = require('path')

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.resolve(__dirname,'../client/favlinks/build')))

app.get('/', (req,res) => {res.sendFile(path.resolve(__dirname,'../client/favlinks/build','index.html'))})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});