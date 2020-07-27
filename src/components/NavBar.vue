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
          <strong>{{userName}}</strong>
        </span>
        <a class="aside__logOut" @click="logOut">Sair</a>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');

      this.navigate();
    },

    getUserInfo() {
      const [userFirstName] = localStorage.getItem('userName')
        ? localStorage.getItem('userName').split(' ')
        : '';
      this.userName = userFirstName;
    },

    navigate() {
      this.$router.push('/login');
    },
  },
  beforeMount() {
    this.getUserInfo();
  },
};
</script>

<style lang="scss" scoped>
#navbar {
  background: #f8f9fa;
  padding: 0 30px;
  box-shadow: 0 3px 2px -2px #ccc;
  min-width: 670px;
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
    span {
      margin-right: 10px;
      font-size: 14px;
      text-transform: uppercase;
      color: #1565c0;
    }

    a {
       transition: transform 0.25s ease
    }

    a:hover{
      filter:brightness(0.5);
      transform: translate3d(0px,-1px,0px);
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
  .aside__logOut {
    margin-left: 20px;
    color: #1565c0;
    background: none;
    border: 0;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    margin-right: 30px;
    cursor: pointer;
    transition: transform 0.25s ease
  }
  .aside__logOut:hover {
    transform: translate3d(0px,-1px,0px);
    filter:brightness(0.5)
  }
}
</style>
