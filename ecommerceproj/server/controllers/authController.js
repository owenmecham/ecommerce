
const bcrypt = require("bcryptjs");
const getDb = require('../database/bootstrap.database');

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body;
        const { session } = req;
        const db = getDb();
        console.log(db);
        let user = await db.users.find({ email: email });
        console.log(user);
        user = user[0];
        if (!user) {
            return res.status(400).send("Email not found");
        }

        const authenticated = bcrypt.compareSync(password, user.user_password);
        if (authenticated) {
            delete user.user_password;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send("Incorrect Password");
        }
    },
    register: async (req, res) => {
        const { email, password } = req.body;
        const { session } = req;
        const db = req.app.get("db");

        let user = await db.check_user([email]);
        user = user[0];
        if (user) {
            return res.status(400).send("User already exists");
        }

        const salt = bcrypt.genSaltSync(20);
        const hash = bcrypt.hashSync(password, salt);

        let newUser = await db.register_user({ hash, email });
        newUser = newUser[0];
        session.user = newUser;
        res.status(201).send(session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.sendStatus(200);
        }
    }
};