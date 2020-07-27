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



Login
![loginNagro](https://user-images.githubusercontent.com/37941820/88587794-e6f25100-d02c-11ea-97c2-58ffbaf1fa3c.png)

ou 

Cadastro de um novo usuário
![cadastroNagro](https://user-images.githubusercontent.com/37941820/88587896-130dd200-d02d-11ea-8210-2f37d3d48597.png)


Cada usuário possui a sua própria lista de empresas, que por sua vez possuem seus próprios produtos.

Página de CRUD das empresas
![empresasNagro](https://user-images.githubusercontent.com/37941820/88587950-23be4800-d02d-11ea-8ee0-f5b59e87c489.png)

Página de CRUD dos produtos.
![produtoNagro](https://user-images.githubusercontent.com/37941820/88588014-3e90bc80-d02d-11ea-9690-f9e7d6f51add.png)


## ⛏️ Ferramentas <a name = "built_using"></a>

- [VueJs](https://vuejs.org/) - Web Framework
- [Json Server](https://github.com/typicode/json-server)
- [Vue The Mask](https://vuejs-tips.github.io/vue-the-mask/)
- [Vue Toastify](https://vue-toastify.netlify.app/)

## ✍️ Autor <a name = "authors"></a>

- [@christiantld](https://www.linkedin.com/in/christiantld/)
