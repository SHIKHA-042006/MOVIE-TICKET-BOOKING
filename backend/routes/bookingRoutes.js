const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createBooking, getMyBookings, cancelBooking } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/my', protect, getMyBookings);
router.delete('/:id', protect, cancelBooking);

module.exports = router;
