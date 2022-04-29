const express=require('express');
const { append } = require('express/lib/response');
const router=express.Router();
const path=require('path');
router.use(express.static('resto'));
router.use(express.json());
router.use(express.urlencoded({extended:false}));
router.route('/',(req,res)=>{
    res.sendFile(path.resolve('resto/index.html'));
});
router.get('/login',(req,res)=>{
    res.sendFile(path.resolve('resto/login.html'));
});
router.get("/register",(req,res)=>{
    res.sendFile(path.resolve('resto/register.html'));
});
router.get('/m',(req,res)=>{
    res.sendFile(path.resolve('resto/mindex.html'));
});
router.get('/mlogin',(req,res)=>{
    res.sendFile(path.resolve('resto/mlogin.html'));
});
router.get('/mregister',(req,res)=>{
    res.sendFile(path.resolve('resto/mregister.html'));
});
router.get('/mdashboard',(req,res)=>{
    res.sendFile(path.resolve('resto/mdashboard.html'));
});
router.get('/addmenu',(req,res)=>{
    res.sendFile(path.resolve('resto/addmenu.html'));
});
router.get('/dashboard',(req,res)=>{
    
    res.sendFile(path.resolve('resto/dashboard.html'));
});
router.get('/menupage',(req,res)=>{
    res.sendFile(path.resolve('resto/viewmenu.html'));
});
router.get('/cart',(req,res)=>{
    res.sendFile(path.resolve('resto/cart.html'));
});
router.get('/morders',(req,res)=>{
    res.sendFile(path.resolve('resto/morders.html'));
});
router.get('/orders',(req,res)=>{
    res.sendFile(path.resolve('resto/orders.html'));
});
router.get('/ratings',(req,res)=>{
    res.sendFile(path.resolve('resto/rating.html'));
});
router.get('/mrating',(req,res)=>{
    res.sendFile(path.resolve('resto/mrating.html'));
});
router.get('/logout',(req,res)=>{
    res.redirect('/');
})
router.get('/mlogout',(req,res)=>{
    res.redirect('/m');
});
router.get('/admin',(req,res)=>{
    res.sendFile(path.resolve('resto/admin/index.html'));
});
router.get('/adminlogin',(req,res)=>{
    res.sendFile(path.resolve('resto/signin.html'));
});
router.get('/addhomepageinfo',(req,res)=>{
    res.sendFile(path.resolve('resto/widget.html'));
});
router.get('/adminreg',(req,res)=>{
    res.sendFile(path.resolve('resto/signup.html'));
})
module.exports=router;