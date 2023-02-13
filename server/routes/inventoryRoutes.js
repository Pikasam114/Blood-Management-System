const router = require("express").Router()
const {
  updateQty,
  addToInventory,
  deleteFromInventory,
} = require("../controllers/inventoryControllers")

// POST request
router.post("/", addToInventory)

// DELETE request
router.delete("/", deleteFromInventory)

//when getting PUT request
router.put("/", updateQty)

module.exports = router
