<template>
  <div class="home">
    <NavBar />
    <div class="form__container">
      <h3 class="form__title">Cadastrar Produto</h3>
      <form @submit.prevent class="form__content">
        <div class="inputs">
          <input type="text" name id="name-product" placeholder="Nome do produto" maxlength="100" />
          <select>
              <option selected disabled value>Escolha uma empresa</option>
              <option v-for="company in companies" :value="company.name"
              :key="company.id">{{company.name}}</option>
          </select>
        </div>
        <div class="buttons">
          <button>Cadastrar</button>
          <button>Atualizar</button>
        </div>
      </form>
    </div>

    <div class="table__container">
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Empresa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Teste</span>
            </td>
            <td>
              <span>Teste</span>
            </td>
            <td>
              <div class="buttons">
                <button>Alterar</button>
                <button>Excluir</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      companies: [],
    };
  },
  components: {
    NavBar,
  },
  methods: {
    async getCompanies() {
      const response = await axios.get('https://5f1aff12610bde0016fd343f.mockapi.io/user/1/companies');
      this.companies = response.data;
    },
  },
  beforeMount() {
    this.getCompanies();
  },
};
</script>

<style lang="scss">
.form__container {
  display: flex;
  background: #f8f9fa;
  margin: 0 100px;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 20px;
}

.form__title {
  padding: 20px 5px;
  background-color: #f0f1f4;
}

.form__content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0 0 20px;
  height: 90px;
  flex-wrap: wrap;

#name-product {
  width: 500px;
}

  input {
    background: rgba(100, 100, 100, 0.1);
    border: 0;
    border-radius: 5px;
    height: 35px;
    padding: 0 15px;
    color: rgba(3, 3, 3, 0.5);
    margin-right: 15px;
    margin-top: 5px;
    &::placeholder {
      color: rgba(3, 3, 3, 0.5);
    }
  }

  #name-company {
    width: 500px;
  }

  .inputs {
    select {
    padding: 10px;
    border:none;
    border-radius: 5px;
    background: rgba(100, 100, 100, 0.1);
    color:  rgba(100, 100, 100, 0.8);
    }
  }

  button {
    background-color: #42b983;
    color: #fff;
    width: 150px;
    height: 40px;
    padding: 10px;
    font-weight: bold;
    border-radius: 5px;
  }

  button + button {
    margin-left: 10px;
    background-color: #1565c0;
  }
}

.table__container {
  display: flex;
  background: #f8f9fa;
  margin: 0 100px;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;

  thead {
    background-color: #f0f1f4;
    border-radius: 10px;
  }

  thead th {
    text-align: center;
    padding: 12px;
    font-size: 16px;
    &:last-of-type {
      text-align: center;
    }
  }
  tbody td {
    padding: 12px;
    vertical-align: middle;

    overflow: hidden;
    font-size: 16px;
    &:last-of-type {
      text-align: center;
    }
  }
  tr:nth-of-type(even) td {
    background: rgba(100, 100, 100, 0.05);
  }
  img {
    height: 100px;
  }
  span {
    margin-top: 5px;
  }
  .buttons {
    display: flex;
    justify-content: center;
    button {
      background-color: #1565c0;
      color: #fff;
      font-size: 12px;
      width: 100px;
      height: 30px;
      padding: 5px;
      font-weight: bold;
      border-radius: 5px;
    }
    button + button {
      margin-left: 10px;
      background-color: #f5365c;
    }
  }
  .tags {
    display: flex;
    max-width: 200px;
    flex-wrap: wrap;
  }
}
</style>
