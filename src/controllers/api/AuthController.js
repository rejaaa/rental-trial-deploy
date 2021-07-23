const UserModel = require('../../models/UsersModel');

class AuthController {
    async login(req, res) {
        try {
            const payload = req.body;
            const userModel = UserModel();
            const data = await userModel.findOne({
                where: {
                    Username: payload.Username,
                }
            });
            if (data) {
                if (data.Password === payload.Password) {
                    return res.status(200).json({
                        data,
                    });
                }
            }

            return res.status(403).json({
                error: 'Username and Password are wrong',
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Failed Authenticated',
            });
        }
    }
}

module.exports = new AuthController();