const data = require("../lib/users");

const getallUsersCtrl = async (req, res) => {
  res.status(200).json(data);
};
module.exports = getallUsersCtrl;
