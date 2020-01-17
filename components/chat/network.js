const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post('/', function(req, res) {
  controller.addChat(req.body.users)
    .then(data => {
      response.sucess(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, 'Internal error', 500, e);
    });
});

router.get('/:userId', function(req, res) {
  controller.listChats(req.params.userId)
    .then(users => {
      response.sucess(req, res, users, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e)
    });
});

module.exports = router;