const Redis = require('ioredis');

// Conectando ao Redis
const redis = new Redis({
    host: '127.0.0.1', // Endereço do Redis
    port: 6379,        // Porta padrão do Redis
});

const run = async () => {
    try {
        // Armazenar um valor
        await redis.set('key', 'Hello, Redis!');
        console.log('Valor armazenado com sucesso!');

        // Recuperar o valor
        const value = await redis.get('key');
        console.log(`Valor recuperado: ${value}`);

        // Excluir o valor
        await redis.del('key');
        console.log('Valor excluído com sucesso!');

        // Tentar recuperar o valor novamente
        const deletedValue = await redis.get('key');
        console.log(`Valor após exclusão: ${deletedValue}`); // Deve ser null

    } catch (error) {
        console.error('Erro:', error);
    } finally {
        // Fechar a conexão com o Redis
        redis.disconnect();
    }
};

run();
