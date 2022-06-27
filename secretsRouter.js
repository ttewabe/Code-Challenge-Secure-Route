const express = require('express');
const secretsRouter = express.Router();

secretsRouter.route('/')

.get((req, res, next) => {
  res.send('hello world')
   /* Server.find()
    .then(servers => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(servers);
    })
    .catch(err => next(err));  */
})

module.exports = secretsRouter;