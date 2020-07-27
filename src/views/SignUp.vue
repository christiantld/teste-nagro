<template>
  <div id="signup">
    <svg id="svg-signup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
      <path
        fill="#f0f1f4"
        fill-opacity="3"
        d="M0,256L40,261.3C80,267,160,277,240,
    277.3C320,277,400,267,480,240C560,213,640,171,720,144C800,117,880,107,960,
    112C1040,117,1120,139,1200,133.3C1280,128,1360,96,1400,80L1440,64L1440,
    0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,
    560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      />
    </svg>
    <div id="form__container">
      <div class="login__form">
        <form @submit.prevent>
          <h3>Faça seu Cadastro</h3>
          <hr />
          <input type="text" required placeholder="Nome" v-model="user.name" />
          <input type="email" required placeholder="E-mail" v-model="user.email" />
          <input type="password" min="5" required placeholder="Senha"
          v-model="user.password" />
          <button @click="register">Cadastrar</button>
        </form>
      </div>
      <div class="signup">
        <span>Já possui conta?</span>
        <router-link to="/login" class="btn__signup">
          <strong>Entrar</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'signup',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    clear() {
      this.user.name = '';
      this.user.password = '';
      this.user.email = '';
    },

    async verifyEmail(email) {
      const response = await axios.get(`http://localhost:3333/users?email=${email}`);
      const user = response.data;

      if (user.length !== 0) {
        throw new Error('Email já cadastrado');
      }

      return true;
    },

    async register() {
      try {
        if (!this.user.email || !this.user.password || !this.user.name) {
          this.$vToastify.warning({
            title: 'Alerta',
            body: 'Preencha os dados corretamente',
            type: 'warning',
            canTimeout: true,
            duration: 2000,
          });
          return;
        }

        await this.verifyEmail(this.user.email);

        const response = await axios.post(
          'http://localhost:3333/users',
          this.user,
        );
        this.clear();
        this.$vToastify.success({
          title: 'Sucesso',
          body: 'Usuário cadastrado',
          type: 'success',
          canTimeout: true,
          duration: 2000,
        });
        setTimeout(() => {
          this.navigate();
        }, 2000);
      } catch (error) {
        this.$vToastify.error({
          title: 'Alerta',
          body: error.message,
          type: 'error',
          canTimeout: true,
          duration: 2000,
        });
      }
    },

    navigate() {
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss">
#form__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login__form {
  padding: 20px;
  width: 300px;
  height: 340px;
  display: flex;
  background-color: #f0f1f4;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;

  form {
    width: 265px;
    height: 265px;
    h3 {
      padding: 10px 20px;
    }

    input {
      background: rgba(100, 100, 100, 0.1);
      border: 0;
      border-radius: 4px;
      width: 250px;
      height: 35px;
      padding: 0 15px;
      color: rgba(3, 3, 3, 0.5);
      margin-right: 15px;
      margin-top: 10px;
      &::placeholder {
        color: rgba(3, 3, 3, 0.3);
      }
    }

    button {
      margin-top: 30px;
      background-color: #1565c0;
      color: #fff;
      width: 150px;
      padding: 10px;
      font-weight: bold;
      border-radius: 5px;
    }

    hr {
      margin: 10px 0;
    }
  }
}

.signup {
  margin-top: 15px;
  width: 300px;
  height: 60px;
  display: flex;
  background-color: #f0f1f4;

  align-items: center;
  justify-content: center;
  border-radius: 5px;
  .btn__signup {
    text-decoration: none;
    font-size: 16px;
    color: #1f272f;
    font-weight: bold;
    margin-left: 5px;
  }
}
</style>
