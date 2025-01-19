const mongoose = require("mongoose");
const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    remainingBalance: { type: Number, default: 0 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("usersDetails", usersSchema);
