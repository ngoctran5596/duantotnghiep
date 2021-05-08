const express = require ('express'); // import express
const app = express (); //dung express 1 funcion
const port = 3000; //khai báo port bao nhiêu

/** tuyến đường router*/
app.get ('/', (req, res) => {
 return res.send ('Hello World!');
});

app.listen (port, () => {
  console.log (`Example app listening at http://localhost:${port}`);
});
