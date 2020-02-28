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
const addItem = itemDataObj => {
  return new Promise((resolve, reject) => {
    const postQuery = connection.query('INSERT INTO department SET ?', itemDataObj, (err, addItemRes) => {
      if (err) {
        console.log.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Added!' });
    });
    consola.info(postQuery.sql);
  });
};

const updateBid = (itemId, bidPrice) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE items SET highest_bid = <new high bid> WHERE id = <item's id>"
    const updateQuery = connection.query(
      'UPDATE items SET ? WHERE ?',
      [{ highest_bid: bidPrice }, { id: itemId }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Bid successfully updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};