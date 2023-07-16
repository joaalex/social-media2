const express = require("express");
const router = express.Router();
const {
        register, profile, updateProfile,
        allUsers, createPost, editPost,
        addComment, editComment, deleteComment,
        reactionToPost, login, getPosts
} = require("../controllers");
const {authorization} = require('../middlewares/authorization')

//login
router.post("/login", login);

//users routes
router.post("/register", register);
router.get("/profile", authorization, profile);
router.patch("/profile", authorization, updateProfile);

//posts routes
router.post("/post", authorization, createPost);
router.patch("/post/:post_id", authorization, editPost)
router.get("/posts", authorization, getPosts);

//comments routes
router.post("/comment/:post_id", authorization, addComment);
router.patch("/comment/:comment_id", authorization, editComment)
router.delete("/comment/:comment_id", authorization, deleteComment)

//reaction routes
router.post("/post/reaction/:post_id", authorization, reactionToPost);

//follow routes

//admin routes
router.get("/admin/users", authorization, allUsers);

module.exports = router;