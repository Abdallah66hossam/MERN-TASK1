const router = require("express").Router();
const getAllPostsCtrl = require("../controllers/postController");
// api/posts
router.get("/", getAllPostsCtrl);

module.exports = router;
