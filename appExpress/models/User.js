const mongoose = require('mongoose');

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  locality: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'unspecified'], required: true },
  countryCode: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  termsAndConditions: { type: Boolean, required: true }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
