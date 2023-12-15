const data = require("../lib/posts");

const getAllPostsCtrl = async (req, res) => {
  res.status(200).json(data);
};
module.exports = getAllPostsCtrl;
