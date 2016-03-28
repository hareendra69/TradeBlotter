'use strict';

var express = require('express');
var router = express.Router();
var treeController = require('../controller/TreeController');

module.exports = {
    createRouter: function(app) {
        router.get('/getTrades/:showPL', treeController.getTrades);
        return router;
    }
};
