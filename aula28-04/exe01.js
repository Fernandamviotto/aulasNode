/*
Crie um endpoint que receba uma quantidade ilimitada de valores inteiros e calcule a soma destes valores, independente da quantidade de números informados 
Ex:
- Valores informados: 1,4,5
- Resultado esperado: 10
Sugestão de retornos possíveis e validações:
● Sucesso:
    ○ Retorna os valores somados
● Erros
    ○ Algum dos valores informados está incorreto (letras, caracteresespeciais, nulos, entre outros)
    ○ O usuário não enviou valores - deve validar se tem pelo menos 1 item na lista
*/

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