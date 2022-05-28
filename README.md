
# TrybeSmith
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

A API TrybeSmith trata-se de uma loja de itens medievais em Typescript.

# Desenvolvimento
A API foi desenvolvida com Eslint e utilizando a arquitetura MSC (Models, Services e Controllers)!
# Aprendizados
Nesse projeto, O objetivo era colocar em prática o conhecimento adquirido sobre o Typescript e os maiores desafios aconteceram ao tipar bibliotecas que tinha tipagem customizada, felizmente consegui superar todos eles.

# Erros e Validações

Todos os retornos de erros seguem o mesmo formato:  
``{ message: <mensagem de erro> }``                                                     

As Validações de dados recebidos pela API foram feitas utilizando a biblioteca JOI;

# Restful

- Foi utilizado os verbos HTTP adequados para cada operação.

- URL agrupadas e padronizadas em cada recurso.

- Foi Garantido que todos endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retorno com os códigos de status corretos (recurso criado, erro de validação, autorização, etc).



# Documentação

## Endpoints


### GET /products

- O endpoint é capaz de listar todos os itens

- A API responde com uma estrutura semelhante a essa: 


**status: 200**

**body:**
```json
[
  {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Escudo do Herói",
    "amount": "100 diamond",
    "orderId": 1
  }
]
  ```
### GET `/orders`

lista todas as **Orders**(Pedidos) e o retorno deve ter uma estrutura semelhante a essa:

**status: 200**

**body:**


  ```json
  [
    {
      "id": 1,
      "userId": 2,
      "productsIds": [1, 2]
    },
    {
      "id": 2,
      "userId": 2,
      "productsIds": [3, 4]
    }
  ]
  ```

### POST `/orders`

Esse endpoint cadastra um novo pedido, mas para isso o usuário deve mandar o token de login na chave `Authorization` no Header da request.

Os Ids dos produtos do novo pedido devem ser enviados no corpo da request.

O corpo da request deve ter estrutura semelhante a essa:

  ```json
  {
    "productsIds": [1, 2]
  }
  ```

Se a request for feito da forma correta, A API responderá com uma estrutura semelhante a essa:

**status: 201**

**body:**

```json
  {
    "userId": 1,
    "productsIds": [1, 2]
  }
```

### POST `/products`

O endpoint cadastra um novo produto:

A requisição deve ser feita com uma estrutura semelhante a essa:


```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

- `name` deve ser uma string com 3 ou mais caracteres

- `amount` deve ser uma string com 3 ou mais caracteres

- `name` e `amount` são obrigatórios

Quando a requisição é feita corretamente, o produto é cadastrado e a resposta terá uma estrutura semelhante a essa:

**status: 201**

**body:**

```json
  {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
  }

```

### POST `/users`

O endpoint cadastra um novo user:

A requisição pode ser feita com uma estrutura semelhante a essa para cadastrar o user:


```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```

- `username` deve ser uma string com 3 ou mais caracteres

- `classe` deve ser uma string com 3 ou mais caracteres

- `level` deve ser um número maior que 0

- `password` deve ser uma string com 8 ou mais caracteres

- Todos são obrigatórios

Quando a requisição é feita corretamente, o usuário é cadastrado e a resposta será um Token de acesso semelhante a esse:

**status: 201**

**body:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}

```

### POST `/login`

Esse endpoint retorna um novo token de acesso para a pessoa usuária.

- O `username` e `password` enviados devem ser válidos

A requisição deve ter uma estrutura semelhante a essa:

```json
  {
    "username": "string",
    "password": "string"
  }
```

A resposta será um token semelhante a esse:

**status: 200**

**body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
---
## Para rodar localmente

1. Clone o repositório
  * `git clone git@github.com:imgeff/trybesmith.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybesmith`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o servidor:
    * `npm start`


    
## Stack utilizada

**Back-end:** Node.js, Typescript, Express, Mysql2, JWT, Joi

## Feedback

Se você tiver algum feedback, por favor mande uma mensagem em  https://www.linkedin.com/in/imgeff/

