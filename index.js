const app = require('./src/api');

app.set('port', process.env.PORT || 3000)

const port = app.get('port')

app.listen(port, () => {
  console.log(`Server listening on port = ${port}`)
})