const router = require("express").Router();
const userRoutes = require("./user-routes");
const groupRoutes = require("./group-routes");
const membershipRoutes = require("./membership-routes");

router.use("/user", userRoutes);
router.use("/group", groupRoutes);
router.use("/membership", membershipRoutes);

module.exports = router;