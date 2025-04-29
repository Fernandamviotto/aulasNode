const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.post('/soma', (req, res) => {
    try {
        const valores = req.body.valores; // espera um array de números
        if (!valores || !Array.isArray(valores)) {
            return res.status(400).json({ 
                error: 'Por favor, forneça pelo menos um valor inteiro.' 
            });
        }

        if (valores.length === 0) {
            return res.status(400).json({ 
                error: 'Por favor, forneça pelo menos um valor inteiro.' 
            });
        }

        const soma = valores.reduce((acc, val) => {
            const numero = typeof curr === 'string' ? parseInt(val, 10) : curr;
            return acc + numero;
        }, 0);

        res.json({ soma });
    
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }

});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});