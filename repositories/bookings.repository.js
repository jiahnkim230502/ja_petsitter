const { Bookings, Petsitters } = require('../models');

class BookingRepository {
  //유저 예약 조회 API
  getBooking = async (userId) => {
    return await Bookings.findAll({ where: { userId }, order: [['createdAt', 'DESC']] });
  };
  //펫시터id로 조회
  findSitter = async (petSitterId) => {
    return await Petsitters.findByPk(petSitterId);
  };
  // 예약 생성 API
  createBooking = async (userId, petSitterId, startTime, endTime) => {
    return await Bookings.create({ userId, petSitterId, startTime, endTime });
  };
  //예약 id로 조회
  getBookingById = async (bookingId) => {
    return await Bookings.findByPk(bookingId);
  };
  //예약 수정 API
  updateBooking = async (bookingId, startTime, endTime) => {
    await Bookings.update({ startTime, endTime }, { where: { bookingId } });
    return await Bookings.findByPk(bookingId);
  };
  //예약 취소 API
  deleteBooking = async (bookingId) => {
    await Bookings.destroy({ where: { bookingId } });
  };
}
module.exports = BookingRepository;
