const { getPosts, addPost } = require('./consultas.js')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3000, console.log("SERVIDOR ENCENDIDO"))

app.get("/posts", async (req, res) => {
  const posts = await getPosts()
  res.json(posts)
})

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body
  await addPost(titulo, img, descripcion)
  res.send("Post agregado con exito")
})