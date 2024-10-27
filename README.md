
# Redis PoC em Node.js

Esta Prova de Conceito (PoC) demonstra a utilização do Redis com Node.js, destacando como conectar-se ao banco de dados Redis, armazenar, recuperar e excluir dados de forma simples e eficaz.

## Pré-requisitos

Antes de começar, você precisará ter os seguintes itens instalados em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Redis](https://redis.io/download) (em execução)

## Configuração do Projeto

1. **Clone este repositório** ou crie um novo diretório:


	   git clone https://github.com/Matheus-Freitas0/node-redis-poc.git
	   cd node-redis-poc` 

2.  **Instale as dependências** necessárias:

    `npm install` 
    

## Execução do Redis

Certifique-se de que o Redis está em execução antes de executar a PoC. Você pode iniciar o Redis com o seguinte comando:

`redis-server` 

## Execução da PoC

Após configurar o Redis e instalar as dependências, execute a PoC com o seguinte comando:

`node index.js` 

Ao executar, você verá mensagens no console indicando o status das operações de armazenamento, recuperação e exclusão de dados.

## Funcionalidades

-   **Armazenamento de Dados**: Salve valores no Redis.
-   **Recuperação de Dados**: Busque valores armazenados.
-   **Exclusão de Dados**: Remova valores do Redis.

## Próximos Passos

Esta PoC serve como um ponto de partida para projetos mais complexos. Você pode explorar as seguintes funcionalidades adicionais:

-   Armazenamento de objetos usando JSON.
-   Implementação de TTL (Time To Live) para chaves.
-   Uso do Redis como um cache para dados temporários.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request com sugestões ou melhorias.

## Licença

Este projeto está licenciado sob a MIT License 
