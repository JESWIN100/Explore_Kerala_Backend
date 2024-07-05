const router = require('express').Router();
const { Signup, Login } = require('../../controllers/userController');
const asyncHandler = require('../../utils/asyncHandler');

router.post('/sign-up', asyncHandler(Signup));

router.post('/log-in', asyncHandler(Login));


module.exports = router;
