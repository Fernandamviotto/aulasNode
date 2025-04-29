const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/parouimpar', (req, res) => {
    try {
        const numero = req.params.numero; 

        if (numero === undefined){
            return res.status(400).json({ error: 
                'Por favor, forneça um número inteiro.' });
        }

        if(!/^-?\d+$/.test(numero)){
            return res.status(400).json({ error: 
                'O valor informado está incorreto. Por favor, forneça um número inteiro.' 
            });
        }

        const numeroInteiro = parseInt(numero);
        const resultado = numeroInteiro % 2 === 0 ? 'par' : 'ímpar';

        return res.json({ resultado });
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}
);

app.post('par-impar', (req, res) => {
    try {
        const numero = req.body; 

        if (numero === undefined){
            return res.status(400).json({ error: 
                'Por favor, forneça um número inteiro.' });
        }

        if(typeof numero !== 'number' || !number.isInteger(numero)){
            return res.status(400).json({ error: 
                'O valor informado está incorreto. Por favor, forneça um número inteiro.' 
            });
        }

        const resultado = numero % 2 === 0 ? 'par' : 'ímpar';

        return res.json({ resultado });

    } catch (error) {
        return res.status(500).json({ error: 
            'Erro interno do servidor.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});