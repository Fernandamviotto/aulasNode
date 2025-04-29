const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.post('/ordenar', (req, res) => {
    try{
        if(!Array.isArray(req.body.valores)){
            return res.status(400).json({error: 'Por favor, forneça uma lista de valores inteiros.'

            });
        }

        const numeros = req.doby.numeros;

        if(numeros.length === 0){
            return res.status(400).json({error: 'Por favor, forneça pelo menos um valor inteiro.'});
        }

        for(const num of numeros){
            if(!numeros.isInteger(num)){
                return res.status(400).json({
                    error: 'Por favor, forneça apenas valores inteiros.'
                });
            }
        }

        const numerosOrdenados = numeros.sort((a, b) => a - b);

        return res.status(200).json({
            numerosOrdenados
        });

    } catch (erros) {
        return res.status(500).json({
            error: 'Erro interno do servidor.' });
    }
});

const PORT = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});