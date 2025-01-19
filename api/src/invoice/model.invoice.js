const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    invoiceNo: {
      type: String,
      required: true,
    },

    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "usersDetails",
    },
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number, // This is now optional
      default: 0, // Set default value if not provided
    },
    amountPaid: {
      type: Number,
      required: true,
      default: 0,
    },
    dueAmount: {
      type: Number,
      default: function () {
        return this.totalAmount;
      }, // Default to totalAmount when the invoice is created
    },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Partially Paid"],
      default: "Pending", // Track the status of the invoice
    },
  },
  { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
