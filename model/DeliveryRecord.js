const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let DeliveryRecord = new Schema({
  service_name: {
    type: String
  },
  tag:{
    type: String
  },
  bug_id: {
    type: String
  },
  submitter_id:{
    type: String
  },
  image_type:{
    type: String
  },
  created_at: {
    type: Date, default: Date.now
  }
}, {
  collection: 'DeliveryRecord'
})

module.exports = mongoose.model('DeliveryRecord', DeliveryRecord)
