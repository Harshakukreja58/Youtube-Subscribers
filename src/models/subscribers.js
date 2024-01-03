const mongoose = require("mongoose");

//schema design
const susbcriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

//export
const subscriberModel = mongoose.model("Subscriber", susbcriberSchema);
module.exports = subscriberModel;
