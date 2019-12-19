const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const uuidv1 = require('uuid/v1');

const adapter = new FileSync('db.json');
const db = low(adapter);

const getRandomNum = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

const apps = [];
const roles = [];

for (let x = 0; x < getRandomNum(3, 5); x++) {
  const appId = uuidv1();
  apps.push({
    id: appId,
    name: `Application ${x + 1}`
  });
  for (let y = 0; y < getRandomNum(3, 10); y++) {
    roles.push({
      id: uuidv1(),
      name: `App ${x + 1}, Role ${y + 1}`,
      appId
    });
  }
}

db.defaults({
  apps,
  roles
}).write();

module.exports = db;
