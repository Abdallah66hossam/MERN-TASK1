const router = require("express").Router();
const getallUsersCtrl = require("../controllers/userController");
// api/users
router.get("/", getallUsersCtrl);

module.exports = router;
