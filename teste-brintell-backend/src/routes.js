const {Router} = require('express')
const Aluno = require ('./database/models/Aluno')
const router = Router()

router.get('/', async (req, res) => {

    Aluno.findAll()
    .then((parm)=>{
        return res.json (parm);
    }).catch((error) =>{
        console.log(error);
        return res.json({
            erro: true,
            mensagem: error
        });
    });
        
})

router.post('/', async (req, res) => {

    await Aluno.create(req.body)
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Salvo com Sucesso"
        });
    }).catch(() =>{
        return res.json({
            erro: true,
            mensagem: "Erro ao Salvar"
        });
    });

})

router.get('/metrica', async (req, res) => {

    var masculinoCount = 0;
    var femininoCount = 0;

    Aluno.findAll({
        where: {
            sexo: 'masculino'
        }
    })
    .then((parm)=>{

        

        Aluno.findAll({
            where: {
                sexo: 'feminino'
            }
        })
        .then((parm2)=>{
            
            masculinoCount = parm.length;
            femininoCount = parm2.length;

            const retorno = [
                masculinoCount,
                femininoCount
            ]
        
            return res.json(retorno);
    
        })
    })

    
        
})


module.exports = router