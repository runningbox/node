"use strict";

const hello = (req, res)=>{
    res.render("home/index")
};

const login = (req, res)=>{
    res.render("home/login")
};

const aboutUs = (req, res)=>{
    res.render("home/about")
};

module.exports = {
    hello,
    login,
    aboutUs,
};