const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:3001/meteor";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log(err);
  }

  db = client.db("meteor");

  //Alterar o JSON "myobj" de acordo com o o resultado que se deseja inserir
  myobj = [
    {
      description: "ATIVO",
      classifier: "100000",
      openingBalance: 1000,
      debit: 300,
      credit: 500,
      finalBalance: 1200,
      parent: null
    },
    {
      description: "ATIVO CIRCULANTE",
      classifier: "110000",
      openingBalance: 500,
      debit: 100,
      credit: 200,
      finalBalance: 600,
      parent: "ATIVO"
    },
    {
      description: "DISPONIVEL",
      classifier: "111000",
      openingBalance: 200,
      debit: 100,
      credit: 50,
      finalBalance: 150,
      parent: "ATIVO CIRCULANTE"
    },
    {
      description: "PASSIVO",
      classifier: "200000",
      openingBalance: 800,
      debit: 250,
      credit: 450,
      finalBalance: 1000,
      parent: null
    }
  ];

  //Para salvar o resultado em uma coleção do MongoDB
  db.collection("balancete").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Numero de linhas inseridas: " + res.insertedCount);
  });
});
