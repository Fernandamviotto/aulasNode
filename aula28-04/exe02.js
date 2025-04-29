/*
Crie um endpoint que receba uma quantidade ilimitada de valores inteiros e retorne ao usuário de maneira ordenada.
Ex:
- Valores informados: 1,6,4,7,10,3
- Resultado esperado: 1,3,4,6,7,10
Sugestão de retornos possíveis e validações
● Sucesso:
    ○ Retorna os valores ordenados
● Erros
    ○ Algum dos valores informados está incorreto (letras, caracteres especiais, nulos, entre outros)
    ○ O usuário não enviou valores - deve validar se tem pelo menos 1 item na lista
*/

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