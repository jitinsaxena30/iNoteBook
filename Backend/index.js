const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.use(express.json())          /*to use req.body and deal with json body requests and many things*/ 

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));





app.listen(port, () => {
  console.log(`iNoteBook backend listening on port ${port}`)
})
