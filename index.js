const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Ini adalah halaman home");
  console.log(send);
});

app.get("/product", (req, res) => {
  res.send("Ini adalah halaman Produk");
});
app.get("/detailproduct", (req, res) => {
  res.send("Ini adalah halaman Detail Produk");
});

app.listen(8000, () => console.log("LOCALHOSTNYA DI 8000an"));
