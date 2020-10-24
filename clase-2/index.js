const express = require('express')
const axios = require('axios')
const { request, response } = require('express')
const app = express()

const PORT = 4000

// const errorHandler = (err, req, res, next) => {

//   console.log(err.stack)
//   res.status(500).send('Oops...')
// }

const reqDate = (req, res, next) => {
  const date = 'Hola que tal'
  req.date = date
  next()
}


app.use(express.json({ extended: true }))
app.use(reqDate)




app.get('/', (request, response) => {
  console.log(request.date)
  response.send('<h1>Bienvenido a mi API</h1>')
})


app.post('/login', ({ body }, response) => {
  response.send(body)

})

//------------------CHALLENGE--------------------//
app.get('/', (request, response) => {
  response.sendFile('home.html', { root: __dirname });
});

//endpoint de mensaje
app.get('/message', ({ query }, response) => {
  response.send(query.mensaje);
});

//endpoint de login
app.post('/login', ({ body }, response) => {
  const { user, password } = body;
  if (!user) response.send('<h1>Usuario no encontrado<h1>');

  if (!password) response.send('<h1>Inserte contraseña<h1>');

  response.send('<h1>Bienvenido a la API, ya estas loggeado</h1>')
});

//ejemplo de uso de body con tres endpoint
app.delete('/body', ({ body }, response) => {
  body.message = 'Delete con body';
  response.send(body);
});
app.put('/body', ({ body }, response) => {
  body.message = 'Put con body';
  response.send(body);
});
app.patch('/body', ({ body }, response) => {
  body.message = 'Patch con body';
  response.send(body);
});
//endpoint de pokemon
app.get('/pokedex/:id', async ({ params }, response, next) => {
  const { id } = params
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    response.send(`Se hizo la petición del pokemón ${data.name}, ${data.id}`)

  } catch (error) {
    next(error)
  }

});


app.listen(PORT, () => {
  console.log(`Se ha inicializado la aplicación en el puerto ${PORT}`)
})