'use-strict';

const express = require('express');
const UsersController = require('../controllers/api/UsersController');
const AuthController = require('../controllers/api/AuthController');

function routes() {
    const router = express.Router();

    router.get('/user', function (req, res) {
        UsersController.index(req, res);
    });

    router.post('/user', function (req, res) {
        UsersController.create(req, res);
    });

    router.put('/user/:userID', function (req, res) {
        UsersController.update(req, res);
    });

    router.delete('/user/:userID', function (req, res) {
        UsersController.remove(req, res);
    });

    router.get('/user/:userID', function (req, res) {
        UsersController.getByUserID(req, res);
    });

    router.post('/auth/login', function (req, res) {
        AuthController.login(req, res);
    });

    return router;
}

module.exports = routes;