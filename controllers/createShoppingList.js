const fs = require('fs');
const path = require('path');

const createShoppingList = (req, res) => {
  const fileName = Date.now().toString();
  const contents = JSON.stringify(req.body);

  fs.writeFile(
    path.join(__dirname, 'shoppingLists', fileName),
    contents,
    err => {
      if (err) throw err;

      res.send({ fileName });
    }
  );
};

module.exports = createShoppingList;
