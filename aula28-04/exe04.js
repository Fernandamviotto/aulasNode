/*
Desenvolva um endpoint que receba uma frase (string) como entrada e retorne a quantidade de palavras contidas na frase.
Ex:
- Valor informado: Socorram-me! Subi no ônibus em Marrocos!
- Resultado esperado: 6

*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/contarPalavras', (req, res) => {
    try {
        const { frase } = req.query; // espera uma string na query string

        if (frase === undefined || frase === null){
            return res.status(400).json({ error: 
                'Por favor, forneça uma frase.' });
        }

        if (typeof frase !== 'string'){
            return res.status(400).json({ error: 
                'O valor informado está incorreto. Forneça uma frase.' 
            });
        }

        const dividirFrase = frase.trim(); // divide a frase em palavras

        if (dividirFrase === '') {
            return res.status(200).json({ wordCount: 0 });
        }

        const words = dividirFrase.split(/\s+/).filter(word => word.length > 0); // remove espaços em branco extras e conta as palavras

        return res.status(200).json({ wordCount: words.length });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.post('/contarPalavras', (req, res) => {
    try {
        const { frase } = req.body; // espera uma string no corpo da requisição

        if (frase === undefined || frase === null){
            return res.status(400).json({ error: 
                'Por favor, forneça uma frase.' });
        }

        if (typeof frase !== 'string'){
            return res.status(400).json({ error: 
                'O valor informado está incorreto. Forneça uma frase.' 
            });
        }

        const dividirFrase = frase.trim(); // divide a frase em palavras

        if (dividirFrase === '') {
            return res.status(200).json({ wordCount: 0 });
        }

        const words = dividirFrase.split(/\s+/).filter(word => word.length > 0); // remove espaços em branco extras e conta as palavras

        return res.status(200).json({ wordCount: words.length });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}
);

