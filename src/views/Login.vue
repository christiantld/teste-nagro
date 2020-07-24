<template>
<div id="wrapper">
<svg id="svg-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
    <path fill="#f0f1f4" fill-opacity="3" d="M0,256L40,261.3C80,267,160,277,240,
    277.3C320,277,400,267,480,240C560,213,640,171,720,144C800,117,880,107,960,
    112C1040,117,1120,139,1200,133.3C1280,128,1360,96,1400,80L1440,64L1440,
    0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,
    560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div id="container">
    <div class="login__form">
      <form action="">
        <h3>Faça seu Login</h3>
        <hr>
        <input type="text" name="" id="" placeholder="E-mail">
        <input type="password" name="" id="" placeholder="Senha">
        <button>Entrar</button>
      </form>
    </div>
    <div class="signup">
      <span>Novo usuário?</span>
      <router-link to="/signup" class="btn__signup">
        <strong>Cadastrar</strong>
      </router-link>
    </div>

  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#container {
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
  background-color:#f0f1f4;
  align-items: flex-start;
  justify-content: center;
  flex-direction:column;
  border-radius:5px;

form {
  width: 265px;
  height: 265px;
  h3 {
    padding: 20px
  }

  input {
    margin: 10px 10px;
    outline: none;
    padding: 8px;
    width: 250px;
    border-radius: 5px;
    border: 1px solid #ddd
  }

  button {
    margin-top: 40px;
    background-color: #1565c0;
    color:#fff;
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
  background-color:#f0f1f4;

  align-items: center;
  justify-content: center;
  border-radius:5px;
  .btn__signup {
    text-decoration: none;
    font-size: 16px;
    color: #1f272f;
    font-weight: bold;
    margin-left: 5px;
  }
}
</style>
