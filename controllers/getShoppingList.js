const fs = require('fs');
const path = require('path');

const getShoppingList = (req, res) => {
  const filename = req.params.filename;

  fs.readFile(
    path.join(__dirname, 'shoppingLists', filename),
    'utf8',
    (err, contents) => {
      if (err) throw err;

      res.send(contents);
    }
  );
};

module.exports = getShoppingList;
