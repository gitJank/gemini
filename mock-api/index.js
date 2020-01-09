const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const uuidv1 = require('uuid/v1');
const db = require('./db');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

// routes
app.get('/apps', (req, res) => {
  res.send(db.get('apps').value());
});

app.post('/apps', (req, res) => {
  const {
    data: { appId, appName }
  } = req.body;

  const newApps = db
    .get('apps')
    .push({ id: appId, name: appName })
    .write();

  res.send(newApps);
});

app.get('/roles/:appId', (req, res) => {
  const { appId } = req.params;
  res.send(
    db
      .get('roles')
      .filter({ appId })
      .value()
  );
});

app.post('/roles', (req, res) => {
  const {
    data: { roleName, appId }
  } = req.body;

  const result = db
    .get('roles')
    .push({ id: uuidv1(), name: roleName, appId })
    .write();

  res.send(result.filter(role => role.appId === appId));
});

app.get('/scopes/:appId', (req, res) => {
  const { appId } = req.params;

  const scopes = db
    .get('scopes')
    .filter({ appId })
    .value();

  res.send(scopes);
});

app.get('/scopes/:appId/:roleId', (req, res) => {
  const { appId, roleId } = req.params;

  const scopes = db
    .get('scopes')
    .filter({ appId, roleId })
    .value()
    .map(scope => scope.id);

  res.send(scopes);
});

app.post('/scopes', async (req, res) => {
  const {
    data: { scopeName, appId }
  } = req.body;

  const result = db
    .get('scopes')
    .push({ id: uuidv1(), name: scopeName, appId })
    .write();

  res.send(result.filter(scope => scope.appId === appId));
});

app.put('/scopes', (req, res) => {
  const {
    data: { roleId, scopeId }
  } = req.body;

  res.send(
    db
      .get('scopes')
      .filter({ id: scopeId })
      .assign({ roleId })
      .write()
  );
});

// serve frontend bundle\
app.use(express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// start the server
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`listening on ${port}`));
