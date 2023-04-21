const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/',  eventController.createevent);
router.get('/:id', eventController.getevent);
router.put('/:id',  eventController.updateevent);
router.delete('/:id', eventController.deleteevent);

module.exports = router;