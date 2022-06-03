const express = require('express');
const router = express.Router();
const userControl = require('../controllers/userControllers');
const { isAuth } = require('../service/auth')

/* GET users listing. */
router.get('/', userControl.getAllUsers);

//取得個人資料
router.get('/profile',isAuth, userControl.getUserProfile);

//登入會員
router.post('/sign_in', userControl.postUserSignIn);

//註冊會員
router.post('/sign_up', userControl.postUserSignUp);

//變更密碼
router.patch('/updatePassword',isAuth, userControl.patchUserPassword)

//變更個人資訊
router.patch('/profile',isAuth, userControl.patchUserProfile);

module.exports = router;


// router.delete('/', handleErrorAsync(
//   async (req, res) => {
//     await User.deleteMany({});
//     res.status(200).json({status:"success", data:[]})
//   }
// ));

// router.delete('/:id', handleErrorAsync(
//   async (req, res, next) => {
//     const id = req.params.id;
//     const resultUser = await User.findByIdAndDelete(id);
//     if(resultUser == null){
//       return next(appError(400,"查無此id",next))
//     }
//     const users =await User.find({});
//     res.status(200).json({status:"success", data:users})
//   }
// ));
