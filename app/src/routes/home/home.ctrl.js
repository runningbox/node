"use strict";

const output = {

    home: (req, res)=>{
        res.render("home/index")
    },    
    login: (req, res)=>{
        res.render("home/login")
    },
    aboutUs: (req, res)=>{
        res.render("home/about")
    },
};

const users = {
    id: ['root', 'obricks', 'manager'],
    password: ['1234', '1234', '123456'],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                return res.json({
                    success: true,
                    msg: "로그인에 성공했습니다."
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};


module.exports = {
    output,  
    process,
};
  