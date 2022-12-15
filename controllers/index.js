const router = require('express').Router();

const apiRoutes = require("./api");
const homeRoute = require('./homepage-routes');
const profileRoutes = require("./profile-routes");
const networkRoutes = require("./network-routes");

router.use("/", homeRoute);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/network", networkRoutes);

module.exports = router;
