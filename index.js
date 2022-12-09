const express = require('express');
const conectarDB = require('./config/db');
const dotenv = require('dotenv');
const veterinarioRoutes = require('./routes/veterinarioRoutes')

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

app.use('/api/veterinarios', veterinarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});
