const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin;
const PostModel = require('../models/posts');
const CommentModel = require('../models/comments');
var https = require("https");
// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx

router.get('/', function (req, res, next) {
    const author = req.query.author;
    // for (let i = 0; i <= 1; i++) {
    //     let post = {
    //         author: req.session.user._id,
    //         title: '使用react开发时，是否应该完全避免命令式代码？',
    //         content: '嗯，怎么说呢，感觉这个问题和"使用react开发时，是否应该完全避免dom操作"类似，个人认为没有必要，不同的编程范式有各自的优缺点，具体如何找平衡点得看具体的情况，比如团队技术水平，项目进度，功能难度之类的。另外，真的想完全避免命令式代码，成本也是非常高昂的，if else都用三目运算符替代……这样的话干脆去写lisp得了，写啥js啊……'
    //
    //     };
    //     PostModel.addPost(post);
    // }

    PostModel.getPosts(author)
        .then(function (posts) {
            res.render('home', {
                posts: posts
            })
        })
        .catch(next)
});


module.exports = router