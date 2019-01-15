const Pool = require('pg').Pool
const pool = new Pool({
  user: 'practice_api',
  host: 'localhost',
  database: 'practice_api',
  password: 'practice_api',
  port: 5432,
})

pool.on('connect', () => {
  console.log('Connected to the data base.');
});

/**
 * Create Tables
 */
const createTables = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      Task(id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        status VARCHAR(10) NOT NULL)`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Drop Tables
 */
const dropTables = () => {
  const queryText = 'DROP TABLE IF EXISTS Task';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require('make-runnable');
