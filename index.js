const express = require("express")
const app = express()
const path = require("path")
app.get("/", (req, res) => {
  res.setHeader(
    "Content-disposition",
    "attachment; filename=message.json"
  )
  res.setHeader("Content-type", "application/json")
  res.download(path.join(__dirname, "test.txt"))
})

app.listen(3000)
