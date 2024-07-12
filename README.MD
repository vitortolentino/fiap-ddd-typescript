


# Sistema de Gerenciamento de Pedidos (Order Management System) - DDD Com Typescript

## Descrição

Este é um exemplo de aplicação de Sistema de Gerenciamento de Pedidos utilizando o conceito de Domain-Driven Design (DDD) em TypeScript.

## Estrutura de Pastas

```sh
src/
├── domain/
│ ├── entities/
│ ├── repositories/
│ ├── services/
├── application/
│ ├── use-cases/
│ ├── dto/
│ ├── mappers/
├── infrastructure/
│ ├── repositories/
├── presentation/
│ ├── controllers/
│ ├── routes/
```



## Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) (versão 10.2.4 ou superior) ou [Yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/seu-usuario/order-management-system.git
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd order-management-system
    ```

3. Instale as dependências:

    ```sh
    npm install
    ```

    ou

    ```sh
    yarn install
    ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Por exemplo:

```
PORT=3000
```

## Execução

Para iniciar a aplicação em modo de desenvolvimento, utilize o comando:

```sh
npm run dev
```
