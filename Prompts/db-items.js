const connection = require('../config/connection');


const getAllItems = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM items', (err, itemData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(itemData);
    });
    console.log(getQuery.sql);
  });
};