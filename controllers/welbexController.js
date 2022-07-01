const database = require('../database');

const WeTable = {
  async readAll(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM "welbexTables"';
      const { rows } = await database.query(readAllQuery);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  },
  async filterWelbex(req, res) {
    const {name, elq, cur} = req.body;
      console.log(name, elq, cur);
    let readAllQuery;
    try {
     elq === "LIKE" ?  readAllQuery = `SELECT * FROM "welbexTables" WHERE "${name}" ${elq} '%${cur}%';`
     :
      readAllQuery = `SELECT * FROM "welbexTables" WHERE "${name}" ${elq} '${cur}';`;

      const { rows } = await database.query(readAllQuery);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  },
  async ins(req, res) {
    try {
      const readAllQuery = `INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (5, '25.05.2021', 'Anna', 21, 42);
      INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (12, '25.05.2021', 'Dima', 28, 12);
      INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (16, '25.05.2021', 'Fedor', 18, 2);
      INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (15, '25.05.2021', 'Valera', 91, 52);
       INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (19, '25.05.2021', 'Valera', 91, 52);
       INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (23, '25.05.2021', 'Dima', 71, 52);
       INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (43, '25.05.2021', 'Fedor', 21, 43);
       INSERT INTO "public"."welbexTables" ("id", "Date", "Name", "amount", "distance") VALUES
      (77, '25.05.2021', 'Anya', 87, 76);`;
      const { rows } = await database.query(readAllQuery);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  },
};



module.exports = WeTable;