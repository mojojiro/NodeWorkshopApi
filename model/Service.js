const mongoose= require('mongoose');

const ServiceSchema = mongoose.Schema({
  dayno: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cdate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Services',ServiceSchema);
