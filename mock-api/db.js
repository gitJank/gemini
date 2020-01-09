const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const uuidv1 = require('uuid/v1');
const sentencer = require('sentencer');

const adapter = new FileSync('db.json');
const db = low(adapter);

const getRandomNum = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const appTypes = [
  'Scheduling',
  'Management',
  'Coordinator',
  'Bill Pay',
  'ID',
  'Portal'
];
const roleTypes = ['Admin', 'Viewer', 'Scheduler', 'Manager'];

const getRandomAppName = () => {
  const noun = sentencer.make('{{ noun }}');
  const appType = appTypes[getRandomNum(1, 6) - 1];
  return `${capitalize(noun)} ${appType}`;
};

const getRandomRoleName = () => {
  const noun = sentencer.make('{{ noun }}');
  const roleType = roleTypes[getRandomNum(1, 4) - 1];
  return `${capitalize(noun)} ${roleType}`;
};

const getRandomScope = () => {
  const noun = sentencer.make('{{ noun }}');
  return { read: `${noun}.read`, write: `${noun}.write` };
};

const apps = [];
const roles = [];
const scopes = [];

for (let x = 0; x < getRandomNum(3, 5); x++) {
  const appId = uuidv1();
  apps.push({
    id: appId,
    name: getRandomAppName()
  });
  const roleIds = [];
  for (let y = 0; y < getRandomNum(3, 10); y++) {
    const roleId = uuidv1();
    roleIds.push(roleId);
    roles.push({
      id: roleId,
      name: getRandomRoleName(),
      appId
    });
  }
  for (let z = 0; z < getRandomNum(5, 10); z++) {
    const scope = getRandomScope();
    scopes.push(
      {
        id: uuidv1(),
        name: scope.read,
        appId,
        roleId: roleIds[getRandomNum(1, roleIds.length) - 1]
      },
      {
        id: uuidv1(),
        name: scope.write,
        appId,
        roleId: roleIds[getRandomNum(1, roleIds.length) - 1]
      }
    );
  }
}

db.defaults({
  apps,
  roles,
  scopes
}).write();

module.exports = db;
