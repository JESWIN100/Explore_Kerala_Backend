const router = require('express').Router();
const userRoutes = require('./users/userRouter');

router.use('/users', userRoutes);

module.exports = router;
