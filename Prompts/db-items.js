const connection = require('../config/connection');


const retrieveData = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM ', (err, itemData) => {
      if (err) {
        console.log.error(err);
        reject(err);
        return;
      }
      resolve(itemData);
    });
    console.log(getQuery.sql);
  });
};
// add
const addData = itemDataObj => {
  return new Promise((resolve, reject) => {
    const postQuery = connection.query('INSERT INTO department SET ?', itemDataObj, (err, addItemRes) => {
      if (err) {
        console.log.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Added!' });
    });
  });
};

