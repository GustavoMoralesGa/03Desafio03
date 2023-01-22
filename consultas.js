const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'likeme',
  allowExitOnIdle: true
})

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts")
  console.log(rows)
  return rows
}

const addPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts values(default, $1, $2, $3)"
  const values = [titulo, img, descripcion]
  const result = await pool.query(consulta, values)
  console.log("Post agregado")
}

module.exports = { getPosts, addPost }