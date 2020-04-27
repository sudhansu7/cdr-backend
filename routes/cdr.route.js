const express = require('express');
const app = express();
const cdrRoute = express.Router();

// Student model
let DeliveryRecord = require('../model/DeliveryRecord');

// Add Student
cdrRoute.route('/add-cdr').post((req, res, next) => {
    DeliveryRecord.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
cdrRoute.route('/').get((req, res) => {
    DeliveryRecord.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single student
cdrRoute.route('/get-cdr/:id').get((req, res) => {
    DeliveryRecord.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
cdrRoute.route('/update-cdr/:id').put((req, res, next) => {
    DeliveryRecord.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete student
cdrRoute.route('/delete-cdr/:id').delete((req, res, next) => {
    DeliveryRecord.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = cdrRoute;