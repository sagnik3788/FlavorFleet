const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");

const publicpath = path.join(__dirname, "..", "..", "public"); 

app.use(express.static(path.join(__dirname, "public")));

console.log(publicpath);
app.use(express.static(publicpath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicpath, "templates/Home.html"));  
});


app.get("/help", (req, res) => {
 res.sendFile(path.join(publicpath, "templates/help.html"));

});


app.get("/search", (req, res) => {
  res.sendFile(path.join(publicpath, "templates/search.html"));
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(publicpath,  "templates/login.html"));
});

app.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(publicpath,  "templates/forgot-password.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(publicpath, "templates/cart.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

