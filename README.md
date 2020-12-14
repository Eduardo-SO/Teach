<h1 align="center">
  Teach
</h1>

<p align="center">
  <img src=".github/teach.gif" />
</p>

# Descrição

Aplicação para avaliar o nível de inglês do usuário com um teste rápido.

É possível informar um nome e um e-mail para a realização de um teste que irá avaliar o nível de inglês do usuário.

O teste é constituído em dez perguntas nas quais as repostas são de escolha única.

Após a finalização do teste, o nível de inglês do usuário será exibido junto com uma opção para enviar o resultado diretamente ao e-mail informado.

# Ferramentas utilizadas

## Front-end

- TypeScript
- React.js
- Next.js
- Axios
- Styled Components
- Linting
    - ESLint
    - Prettier
    - EditorConfig

## Back-end

- TypeScript
- Node.js
- Express
- TypeORM
- Knex
- Nodemailer
- Linting
    - ESLint
    - Prettier
    - EditorConfig

# Executando a aplicação

## Ferramentas necessárias

- **[NodeJS](https://nodejs.org/en/download/)**

    *Instalar preferencialmente a versão LTS*

    Necessário para rodar código JS/TS em sua máquina local.

- **[Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable)**

    Gerenciador de pacotes do NodeJS.

    Utilizado para instalar as bibliotecas e frameworks utilizados na aplicação.

- **[Git](https://git-scm.com/downloads)**

    Contém diversos recursos para o versionamento do código.

    Também utilizado para baixar o código da aplicação em sua máquina local.

## Baixando e executando

- Para baixar a aplicação na sua máquina rode o seguinte comando no terminal:

```bash
git clone https://github.com/Eduardo-SO/Teach.git
```

Feito isso, será baixado uma pasta contendo o código da aplicação

- Acesse ela com o comando:

```bash
cd Teach
```

## Executando o Back-end

Iremos utilizar o Docker para iniciar o container do banco de dados.

- Para isso rode o comando:

```bash
docker run --name teach_postgres -e POSTGRES_PASSWORD=teach2020 -p 5432:5432 -d postgres
```

Com o container inicializado, precisaremos também criar o banco de dados da aplicação. Para isso podemos utilizar uma ferramenta chamada [DBeaver](https://dbeaver.io/download/).

- Com o DBeaver aberto, podemos clicar na opção **Banco de Dados** e em seguida em **Nova Conexão de Bancos**;
- Após isso selecione a opção **PostgreSQL**;
- Na etapa seguinte preencha os campos com as seguintes informações:
    - **Host:** localhost
    - **Port:** 5432
    - **Username:** postgres
    - **Password:** teach2020
- Feito isso clique em **Terminar**
- Clique com o botão direito na nova conexão adicionada e em seguida em **Criar → Banco de Dados**
- Coloque o nome do banco de dados como **teach** e em seguida clique em **Ok**

Feito isso nós teremos nosso banco de dados rodando.

- Voltando para o terminal, caso você esteja na pasta `web` rode o seguinte comando para entrar na pasta `server`:

```bash
cd ../server
```

- Instale as dependências com o Yarn:

```bash
yarn
```

- Rode as migrations para criar as tabelas no banco de dados:

```bash
yarn typeorm migration:run
```

- Rode a seed para popular a tabela de questões no banco de dados:

```bash
yarn knex:seed
```

- Inicie o servidor:

```bash
yarn dev:server
```

## Executando o Front-end

- Entre na pasta web:

```bash
cd web
```

- Instale as dependências com o Yarn:

```bash
yarn
```

- Inicie a aplicação:

```bash
yarn dev
```

Com isso a aplicação será iniciada em [http://localhost:3000/](http://localhost:3000/)

# Informações adicionais

- Como a aplicação não está em produção, o envio de e-mail está sendo realizado através da ferramenta **[Mailtrap](https://mailtrap.io/)**. Para testar essa funcionalidade você pode criar uma conta *grátis* no serviço deles e alterar o **user** e o **pass** no arquivo **SendEmailService.ts** no back-end.

    ```bash
    ...
    const transporter = nodemailer.createTransport({
          host: 'smtp.mailtrap.io',
          port: 2525,
          auth: {
            user: 'Seu usuário',
            pass: 'Sua senha',
          },
        })
    ...
    ```