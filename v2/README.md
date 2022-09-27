# V2

Versão evoluída da V1, agora separada em controllers.

## Como executar

1. Criar uma cópia do arquivo ```.env.example``` com o nome ```.env```
```
cp .env.example .env
```

2. Preencher as variáveis com os valores
```
PORT=

BANK_API_REQUESTS='http://177.44.248.30/v1'

DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DIALECT=
```

3. Instalar os pacotes
```
npm install
```

4. Executar o projeto
```
npm run serve
```