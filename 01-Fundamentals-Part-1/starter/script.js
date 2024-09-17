var hotel = {
  names: 'Quay',
  rooms: 24,
  booked: 20,

  checkAvailability: function () {
    return (this.rooms + this.booked);
  }

};

console.log(hotel.rooms, hotel.checkAvailability());
