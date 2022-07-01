const express = require('express');
const database = require('./database');
var bodyParser = require('body-parser')
var cors = require('cors');



const WeTable = require('./controllers/welbexController');  
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( async(req, res, next) => {
  try {
    const readAllQuery = 'CREATE TABLE IF NOT EXISTS "welbexTables" ("id" SERIAL , "Date" TIMESTAMP WITH TIME ZONE, "Name" VARCHAR(255), "amount" INTEGER, "distance" INTEGER, PRIMARY KEY ("id"));';
    await database.query(readAllQuery);
    next();
  } catch (error) {
    return res.send(error);
  }
  
});

app.get('/', WeTable.readAll)
app.post('/filt', WeTable.filterWelbex);

//Добавить Row в таблицу(Для тестирования).
app.get('/ins', WeTable.ins);


app.listen(PORT, () => {
  console.log(`Сервер старт: http://localhost:${PORT}/`);
});
