const Veterinario = require('../models/Veterinario')


const registrar = async (req, res) => {

    const { email, password } = req.body; 

    // Usuarios ya registrados
    const existeUsuario = await Veterinario.findOne({email});
    if(existeUsuario){
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg: error.message})
    }
    try {
        // Guardar nuevo Veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();

        res.json(veterinarioGuardado)

    } catch (error) {
        console.log(error)
    }

};

const perfil = (req, res) => {
    res.send({msg:"Mensaje de JSON para perfil"})
};

const confirmar = async (req, res) => {
    const token = req.params.token;

    const usuarioConfirmar = await Veterinario.findOne({token});
    console.log(usuarioConfirmar);
    if(!usuarioConfirmar){
        const error = new Error('Token no Válido');
        return res.status(404).json({msg:error.message});
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();


    } catch (error) {
        console.log(error);
    }

    res.json({msg: "Confirmando cuenta"});
};

const autenticar = async (req, res) => {

    const usuario = await Veterinario.findOne({email});

    if(!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });

    } 


    res.json({msg: "Autenticando"});
};

module.exports = { 
    registrar,
    perfil,
    confirmar,
    autenticar 
};