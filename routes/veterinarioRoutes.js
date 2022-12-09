const express = require('express');
const router = express.Router();

const { registrar, perfil, confirmar, autenticar } = require ('../controllers/veterinarioController');

router.post('/', registrar );
router.get('/perfil', perfil );
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);



module.exports = router;