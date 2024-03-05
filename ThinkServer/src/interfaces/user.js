var express = require('express')
var router = express.Router()
const User = require('../dbs/models/user')
const Address = require('../dbs/models/address')
const Order=require('../dbs/models/order')
// 处理注册请求
router.post("/register", async (req, res) => {
    // 将请求体中的信息结构出来
    const { username, password, tel, email, headPortrait, sex, address, orderCollection } = req.body;
    // 通过数据库查询方式放入user中
    const user = await User.find({ username })
    if (user.length) {
        res.status(200).json({
            code: -1,
            msg: "用户名已被注册"
        })
        return;

    }
    const users = new User(req.body)
    users.save().then(function (user, err) {
        if (err) {
            res.status(200).json({
                code: -1,
                message: "注册失败"
            })
            return;
        }
        res.status(200).json({
            code: 0,
            message: "注册成功"
        })
        return;
    })
})

//处理登录请求
router.post("/login", async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    User.findOne({ username, password }, (error, user) => {
        if (error) {
            res.status(200).json({
                code: -1,
                msg: error.message,
            });
            return;
        }
        else {
            if (!user) {
                res.status(200).json({
                    code: 1,
                    msg: "账号密码错误",
                });
                return;
            } else {
                // 登录成功后将数据保存到session会话中
                req.session.user = user;
                res.status(200).json({
                    code: 0,
                    msg: "登录成功",
                });
            }
        }
    })

})
// 获取用户信息
router.get("/userinfo", (req, res) => {
    if (req.session.user) {
        const { username, password, tel, email, headPortrait, sex, address, orderCollection } = req.session.user;
        res.status(200).json({
            username: username,
            password: password,
            tel: tel,
            email: email,
            headPortrait: headPortrait,
            sex: sex,
            address: address,
            orderCollection: orderCollection,
            login: true
        })
    } else {
        res.status(200).json({
            username: "",
            password: "",
            tel: "",
            email: "",
            headPortrait: "",
            sex: "",
            address: "",
            orderCollection: "",
            login: false
        })
    }
})

//修改用户信息
router.post("/userupdate", (req, res) => {
    console.log("userupdate")
    const { username } = req.body
    User.findOneAndUpdate({
        username: username
    }, req.body, { new: true }, (error, result) => {
        req.session.user = result;
        if (!error) {
            res.send({
                code: 0,
                msg: "修改用户信息成功",
                user: result
            })
        }
    })
})


// 退出登录
router.get("/exit", (req, res) => {
    req.session.user = null;
    req.session.destroy();
    res.status(200).json({
        code: 0,
    })
})


// 新增地址
router.post("/address", (req, res) => {
    if (req.session.user) {
        console.log(req.body.address._value, 'xxx')
        const data = new Address({
            username: req.session.user.username,
            address: req.body.address._value
        })
        data.save().then(() => {
            res.status(200).json({
                code: 0,
            })
        })
    }
})

//获取地址列表
router.get('/getaddrelist', async (req, res) => {
    console.log(req.session.user, '9999999');
    // res.send('ok')
    if (req.session.user) {
        // console.log(123);
        const add = await Address.find({ username: req.session.user.username })
        console.log(add, '服务器');
        res.status(200).json({
            code: 0,
            address: add
        })
    } else {
        res.send('未登录')
    }
})

// 更新地址
router.post("/update", async (req, res) => {
    console.log(req.body._id)
    if (req.body) {
        const address = req.body.update
        const id = req.body._id
        console.log(address);
        Address.findOneAndUpdate({ _id: id }, { $set: { address: address } }).then((e) => {
            console.log(e, "3333333")
            res.status(200).json({
                code: 0,
            })
        }, (err) => {
            res.status(200).json({
                code: -1,
            })
        })
    } else {
        res.status(200).json({
            address: "",
        })
    }
})

// 获取单个地址
router.post('/getoneaddre', (req, res) => {
    if (req.body) {
        Address.findById(req.body._id).then((e) => {
            res.status(200).json({
                code: 0,
                address: e
            })
        })
    }
})
// 删除地址
router.post('/removeadd', (req, res) => {
    if (req.body) {
        Address.findByIdAndRemove(req.body._id).then((e) => {
            res.status(200).json({
                code: 0,
                address: e
            })
        })
    }
})



// // 修改地址
// router.post('/updateadd', (req, res) => {
//     if (req.body) {
//         Address.findByIdAndUpdate(req.body._id).then((e) => {
//             res.status(200).json({
//                 code: 0,
//                 address: e
//             })
//         })
//     }
// })

// 添加地址

module.exports = router;