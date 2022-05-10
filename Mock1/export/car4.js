// car.js
exports.car = {
  brand: 'Ford',
  model: 'Fiesta',
};

module.exports = {
  brand: 'Tesla',
  model: 'Model S',
};

// app.js
const tesla = require('./car');
const ford = require('./car').car;

console.log(tesla, ford);
