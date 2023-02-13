const db = require("../db")

function updateQty(req, res) {
  const { bloodType, bloodBank, qty } = req.body

  db.query(
    "UPDATE inventory SET qty=? WHERE blood_id = (SELECT blood_id FROM blood WHERE type = ?) && bank_id = (SELECT bank_id FROM blood_bank WHERE name = ?);",
    [qty, bloodType, bloodBank],
    (error, result) => {
      if (error) return res.status(500).json({ message: error })
      return res.send(result)
    }
  )
}

function addToInventory(req, res) {
  const { bloodType, bloodBank, qty } = req.body
  console.log(req.body)
  db.query(
    "INSERT INTO inventory VALUES ((SELECT blood_id FROM blood WHERE type = ?), (SELECT bank_id FROM blood_bank WHERE name = ?), ?);",
    [bloodType, bloodBank, parseInt(qty)],
    (error, result) => {
      if (error) return res.json({ message: error })
      // console.log(result)
      res.send(result)
    }
  )
}

function deleteFromInventory(req, res) {
  const { bloodType, bloodBank } = req.body
  db.query(
    "DELETE FROM inventory WHERE blood_id = (SELECT blood_id FROM blood WHERE type = ?) && bank_id = (SELECT bank_id FROM blood_bank WHERE name = ?);",
    [bloodType, bloodBank],
    (error, result) => {
      if (error) return res.json({ message: error })
      res.send(result)
    }
  )
}
module.exports = {
  updateQty,
  addToInventory,
  deleteFromInventory,
}
