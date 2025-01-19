const router = require("express").Router();
const adminRouts = require("./src/admin/route.admin");
const usersRoute = require("./src/users/route.users");
const productRoute = require("./src/product/route.product");
const invoiceRoute = require("./src/invoice/route.invoice");
const categoryRoute = require("./src/category/route.category");
const payBillRoute=require("./src/payBill/route.payBill")
router.use("/admin", adminRouts);
router.use("/users", usersRoute);
router.use("/product", productRoute);
router.use("/invoice", invoiceRoute);
router.use("/category", categoryRoute);
router.use("/pay", payBillRoute);
module.exports = router;
