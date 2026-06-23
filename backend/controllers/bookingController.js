const Show = require('../models/Show');
const Booking = require('../models/Booking');

// Book selected seats for a show
const createBooking = async (req, res) => {
  try {
    const { showId, seats } = req.body; // seats = ['A1', 'A2']

    if (!showId || !seats || seats.length === 0) {
      return res.status(400).json({ message: 'showId and seats are required' });
    }

    const show = await Show.findById(showId);
    if (!show) return res.status(404).json({ message: 'Show not found' });

    // Atomic update: only mark seats booked if none of them are already booked.
    // This is what prevents two users from booking the same seat at the same time.
    const updateResult = await Show.updateOne(
      {
        _id: showId,
        seats: {
          $not: {
            $elemMatch: { seatNumber: { $in: seats }, status: 'booked' },
          },
        },
      },
      {
        $set: { 'seats.$[elem].status': 'booked' },
      },
      {
        arrayFilters: [{ 'elem.seatNumber': { $in: seats } }],
      }
    );

    if (updateResult.modifiedCount === 0) {
      return res.status(409).json({ message: 'One or more selected seats are already booked' });
    }

    const totalAmount = seats.length * show.price;

    const booking = await Booking.create({
      user: req.user.userId,
      show: showId,
      seats,
      totalAmount,
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get logged-in user's booking history
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId })
      .populate('show')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cancel a booking and release its seats
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    if (booking.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to cancel this booking' });
    }

    booking.status = 'cancelled';
    await booking.save();

    await Show.updateOne(
      { _id: booking.show },
      { $set: { 'seats.$[elem].status': 'available' } },
      { arrayFilters: [{ 'elem.seatNumber': { $in: booking.seats } }] }
    );

    res.json({ message: 'Booking cancelled' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createBooking, getMyBookings, cancelBooking };
