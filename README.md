<h3 align="center">Teste Nagro</h3>

---

<p align="center"> Implementação de aplicação frontend para consumir API e realizar as operações de CRUD de empreasas e produtos
    <br> 
</p>

## 📝 Conteúdo

- [Inciando a aplicação](#getting_started)
- [Utilização](#usage)
- [Ferramentas](#built_using)
- [Autor](#authors)

## 🏁 Iniciando a aplicação <a name = "getting_started"></a>

A aplicação está rodando em modo de desenvolvimento

### Pré requisitos

* [Node Js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://yarnpkg.com/)
* [Vue CLI](https://cli.vuejs.org/)
    ```
    npm install -g @vue/cli
    # OU
    yarn global add @vue/cli
    ```
* [GIT](https://git-scm.com/)

### Iniciando a aplicação

Pelo terminal do seu sistema operacional, acesse a pasta onde deseja clonar o projeto e rode o comando
 

```
git clone https://github.com/christiantld/teste-nagro.git

# OU COM SSH

git clone git@github.com:christiantld/teste-nagro.git
```

Ao clonar o repositório, basta acessá-lo com o comando

```
cd teste-nagro
```

Dentro da pasta do projeto, instale as dependências

```
npm install

# OU

yarn install
```

## 🔧 Conectando ao servidor de desenvolvimento <a name = "tests"></a>


Para a nossa aplicação realizar as operações de CRUD é preciso conecta-la ao mock da api entitulado`server.json`

Rode o comando abaixo
```
npx json-server server.json -p 3333 -w
```

Um servidor será incializado em `http://localhost:3333/`


### Rodando a aplicação

Com o servidor inicializado, rode o comando abaixo

```
npm run serve

# OU

yarn serve
```

A aplicação irá inicializar em `http://localhost:8080`, caso a porta esteja disponível

## 🎈 Utilização <a name="usage"></a>

A aplicação possui três usuários pré cadastrados para testes que você pode utilizar

```
   {
      "name": "Tester User",
      "email": "teste@email.com",
      "password": "123456",
    },
    {
      "name": "John Doe",
      "email": "johndoe@email.com",
      "password": "123456",
    },
    {
      "name": "Jane Doe",
      "email": "janedoe@email.com",
      "password": "123456",
    }
    
  ```

Cada usuário possui a sua própria lista de empresas, que por sua vez possuem seus próprios produtos.


## ⛏️ Ferramentas <a name = "built_using"></a>

- [VueJs](https://vuejs.org/) - Web Framework

## ✍️ Autor <a name = "authors"></a>

- [@christiantld](https://www.linkedin.com/in/christiantld/)
