const { mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  priority: {
    type: String,
    required: true,
    enum: ["High", "Medium", "Low"],
    default: "Low",
  },
},
{ timestamps: true }
   );
  
  const event = mongoose.model('event', eventSchema);
  
  module.exports = event;
  