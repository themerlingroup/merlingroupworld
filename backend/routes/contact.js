const router = require('express').Router();
let User = require('../models/contactmodels');
router.route('/').get((res, req) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.statusCode(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json('ERROR: ' + err));
});
module.exports = router;
