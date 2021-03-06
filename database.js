const { Pool } = require('pg');


// your credentials
DATABASE_URL = 'postgres://postgres:root@localhost:5432/welbex';

const pool = new Pool({
  connectionString: DATABASE_URL
});

// a generic query, that executes all queries you send to it
function query(text) {
  return new Promise((resolve, reject) => {
    pool
      .query(text)
      .then((res) => {
        resolve(res);
        
      })
      .catch((err) => {
        reject(err);
        console.log(err)
      });
  });
}




module.exports = {
  query
};
