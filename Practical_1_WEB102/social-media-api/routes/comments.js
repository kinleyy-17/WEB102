const express = require('express');
const router = express.Router();
const controller = require('../controllers/commentController');

router.get('/', controller.getComments);
router.get('/:id', controller.getComment);
router.post('/', controller.createComment);
router.put('/:id', controller.updateComment);
router.delete('/:id', controller.deleteComment);

module.exports = router;