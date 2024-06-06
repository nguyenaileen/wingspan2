const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const imageRoutes = require('./imageRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/image', imageRoutes);

module.exports = router;
