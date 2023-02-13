const router = require("express").Router();
const bankRoutes = require("./bankRoutes");
const bloodRoutes = require("./bloodRoutes");
const inventoryRoutes = require("./inventoryRoutes");

router.use("/blood-bank", bankRoutes);
router.use("/blood", bloodRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;
