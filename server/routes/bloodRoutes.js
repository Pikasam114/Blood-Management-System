const router = require("express").Router()
const {
  getAllBloods,
  getDetailsByBloodType,
} = require("../controllers/bloodControllers")
const db = require("../db")

// get all blood types from blood table
router.get("/", getAllBloods)

// get blood and banks by blood type
router.get("/type/:type", getDetailsByBloodType)

module.exports = router
