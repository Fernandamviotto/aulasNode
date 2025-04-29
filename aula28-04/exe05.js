//Aponte um caso de uso real para os seguintes HTTP Status Code na tabela abaixo:


/*
404 - Este código pode ser utilizado quando o recurso ou página buscada na Api ou no website não é encontrado. Ex: o usuário busca o produto com id 1024 através da rota /api/produtos/1024, mas o mesmo foi excluído ou está inacessível.
*/

/*
201 - Este código pode ser utilizado quando um novo recurso é criado com sucesso. Ex: o usuário cria um novo produto através da rota /api/produtos e o mesmo é inserido com sucesso no banco de dados.
*/

/*
204 - Este código pode ser utilizado quando uma requisição é bem-sucedida, mas não há conteúdo para retornar. Ex: o usuário exclui um produto através da rota /api/produtos/1024 e a operação é realizada com sucesso, mas não há conteúdo para retornar.
*/

/*
301 - Este código pode ser utilizado quando um recurso foi movido permanentemente para uma nova URL. Ex: o usuário acessa a rota /api/produtos/1024, mas o produto foi movido para /api/novos-produtos/1024 e o servidor redireciona automaticamente para a nova URL.
*/

/*
308 - Este código pode ser utilizado quando um recurso foi movido permanentemente para uma nova URL, mas o método da requisição deve ser mantido. Ex: o usuário acessa a rota /api/produtos/1024 com o método POST, mas o produto foi movido para /api/novos-produtos/1024 e o servidor redireciona automaticamente para a nova URL mantendo o método POST.
*/

/*
405 - Este código pode ser utilizado quando o método HTTP utilizado na requisição não é permitido para o recurso solicitado. Ex: o usuário tenta acessar a rota /api/produtos/1024 com o método DELETE, mas o mesmo só permite o método GET e o servidor retorna um erro 405.
*/

/*
413 - Este código pode ser utilizado quando o tamanho do payload da requisição é maior do que o servidor pode processar. Ex: o usuário tenta enviar um arquivo muito grande através de uma requisição POST, mas o servidor não consegue processar o arquivo e retorna um erro 413.
*/

/*
414 - Este código pode ser utilizado quando a URL da requisição é muito longa e o servidor não consegue processá-la. Ex: o usuário tenta acessar uma URL com muitos parâmetros de consulta, mas o servidor não consegue processar a URL e retorna um erro 414.
*/

/*
429 - Este código pode ser utilizado quando o usuário excede o limite de requisições permitidas em um determinado período de tempo. Ex: o usuário tenta acessar a rota /api/produtos muitas vezes em um curto espaço de tempo, mas o servidor retorna um erro 429 indicando que o limite foi excedido.
*/

/*
502 - Este código pode ser utilizado quando o servidor atua como um gateway ou proxy e não consegue obter uma resposta válida do servidor upstream. Ex: o usuário tenta acessar a rota /api/produtos, mas o servidor não consegue se conectar ao banco de dados e retorna um erro 502.
*/

/*
503 - Este código pode ser utilizado quando o servidor está temporariamente indisponível, geralmente devido a manutenção ou sobrecarga. Ex: o usuário tenta acessar a rota /api/produtos, mas o servidor está em manutenção e retorna um erro 503.
*/

