const Pool = require('pg').Pool
const pool = new Pool({
  user: 'practice_api',
  host: 'localhost',
  database: 'practice_api',
  password: 'practice_api',
  port: 5432,
})

// tasks
const list_all_tasks = (request, response) => {
  pool.query('SELECT * FROM Task ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// tasks/:taskId
const read_a_task = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM Task WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// tasks
const create_a_task = (request, response) => {
  const { name, status } = request.body

  pool.query('INSERT INTO Task (name, status) VALUES ($1, $2)', [name, status], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('Task added successfully.')
  })
}

// tasks/:taskId
const update_a_task = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, status } = request.body

  pool.query(
    'UPDATE Task SET name = $1, status = $2 WHERE id = $3',
    [name, status, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Task with ID: ${id} modified successfully.`)
    }
  )
}

// tasks/:taskId
const delete_a_task = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM Task WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Task with ID: ${id} deleted successfully.`)
  })
}

module.exports = {
  list_all_tasks,
  read_a_task,
  create_a_task,
  update_a_task,
  delete_a_task,
}
