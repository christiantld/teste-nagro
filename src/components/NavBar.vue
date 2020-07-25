<template>
  <div id="navbar">
    <div id="content">
      <nav>
        <img src="./../assets/logo.svg" alt="logo" />
        <router-link to="/">
          <span>Empresas</span>
        </router-link>
        <router-link to="/products">
          <span>Produtos</span>
        </router-link>
      </nav>

      <aside>
        <span class="aside__greetings">
          Olá,
          <strong>Usuario</strong>
        </span>
        <button @click="logOut">Sair</button>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async logOut() {
      const response = await axios.get('https://5f1aff12610bde0016fd343f.mockapi.io/user/1');
      const { id, name, email } = response.data;

      console.log(id, name, email);
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar {
  background: #f8f9fa;
  padding: 0 30px;
  box-shadow: 0 3px 2px -2px #ccc;
}

#content {
  height: 60px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: flex-start;
    margin-top: 8px;
    a:visited {
      color: #1565c0;
    }
    span {
      margin-right: 10px;
      font-size: 14px;
      text-transform: uppercase;
    }
    img {
      width: 80px;
      margin-right: 20px;
    }
  }
  aside {
    display: flex;
    justify-content: left;
  }
  button {
    margin-left: 20px;
    color: #1565c0;
    background: none;
    border: 0;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    margin-right: 30px;
  }
}
</style>
background: rgba(100, 100, 100, 0.1);
