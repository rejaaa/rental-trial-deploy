const UserModel = require('../../models/UsersModel');

class UsersController {
    async index(req, res) {
        try {
            const userModel = UserModel();
            const data = await userModel.findAll();
            return res.status(200).json({
                data,
            });
        } catch (error) {
            return res.status(500).json({
                error: error.toString(),
            });
        }
    }

    async create(req, res) {
        try {
            const payload = req.body;
            const userModel = UserModel();
            const response = await userModel.create({
                Username: payload.Username,
                Email: payload.Email,
                Password: payload.Password,
                FullName: payload.FullName,
            });
            return res.status(201).json({
                data: response,
            });
        } catch (error) {
            return res.status(500).json({
                error: error.toString(),
            });
        }
    }

    async update(req, res) {
        try {
            const ID = req.params.userID;
            const payload = req.body;
            const userModel = UserModel();
            const response = await userModel.update({
                Username: payload.Username,
                Email: payload.Email,
                Password: payload.Password,
                FullName: payload.FullName,
            }, {
                where: {
                    ID,
                },
            });
            return res.status(201).json({
                data: response,
            });
        } catch (error) {
            return res.status(500).json({
                error: error.toString(),
            });
        }
    }

    async remove(req, res) {
        try {
            const ID = req.params.userID;
            const userModel = UserModel();
            const response = await userModel.destroy({
                where: {
                    ID,
                }
            });
            return res.status(200).json({
                data: response,
            });
        } catch (error) {
            return res.status(500).json({
                error: error.toString(),
            });
        }
    }

    async getByUserID(req, res) {
        try {
            const ID = req.params.userID;
            const userModel = UserModel();
            const data = await userModel.findOne({
                where: {
                    ID,
                }
            });
            return res.status(200).json({
                data,
            });
        } catch (error) {
            return res.status(500).json({
                error: error.toString(),
            });
        }
    }
}

module.exports = new UsersController();
