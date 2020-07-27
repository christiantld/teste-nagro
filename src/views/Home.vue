<template>
  <div class="home">
    <NavBar />
    <div class="form__container">
      <h3 class="form__title">Cadastrar Empresa</h3>
      <form @submit.prevent class="form__content">
        <div class="inputs">
          <input
            type="text"
            id="name-company"
            required
            placeholder="Nome da empresa"
            autocomplete="off"
            maxlength="100"
            v-model.trim.lazy="company.name"
          />
          <input
            type="text"
            id="cnpj"
            placeholder="CNPJ"
            required
            autocomplete="off"
            v-model.trim.lazy="company.cnpj"
            v-mask="['##.###.###/####-##']"
          />
        </div>
        <div class="buttons">
          <button @click="saveCompany">{{!id ? 'Cadastrar' : 'Atualizar'}}</button>
          <button v-if="id" @click="cancelEditCompany">Cancelar</button>
        </div>
      </form>
    </div>

    <div class="table__container">
      <table>
        <thead v-if="companies.length === 0">
          <th>Nenhuma empresa cadastrada</th>
        </thead>
        <thead v-else>
          <tr>
            <th>Nome da empresa</th>
            <th>CNPJ</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in companies" :key="company.id">
            <td>
              <span>{{company.name}}</span>
            </td>
            <td>
              <span>{{company.cnpj}}</span>
            </td>
            <td>
              <div class="buttons">
                <button @click="editCompany(company)">Alterar</button>
                <button @click="deleteCompany(company)">Excluir</button>
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
import { mask } from 'vue-the-mask';

export default {
  name: 'Home',
  directives: { mask },
  data() {
    return {
      company: {
        userId: this.getUserId(),
        name: '',
        cnpj: '',
      },
      id: null,
      companies: [],
    };
  },
  components: {
    NavBar,
  },
  methods: {
    clear() {
      this.company.name = '';
      this.company.cnpj = '';
      this.id = null;
      delete this.company.id;
    },
    getUserId() {
      const userId = localStorage.getItem('userId');
      return userId;
    },
    editCompany(company) {
      this.company = company;
      this.id = company.id;
    },
    cancelEditCompany() {
      this.clear();
      this.getCompanies();
    },
    async getCompanies() {
      try {
        const response = await axios.get(
          `http://localhost:3333/companies?userId=${this.company.userId}&_sort=name&_order=asc`,
        );
        const companies = response.data;
        this.companies = companies;
      } catch (error) {
        this.$vToastify.error({
          title: 'Erro',
          body: 'Falha no carregamento das empresas',
          type: 'error',
          canTimeout: true,
          duration: 2000,
        });
      }
    },
    async saveCompany() {
      try {
        if (!this.company.name || !this.company.cnpj) {
          this.$vToastify.warning({
            title: 'Alerta',
            body: 'Preencha os dados corretamente',
            type: 'warning',
            canTimeout: true,
            duration: 2000,
          });
          return;
        }
        if (!this.id) {
          await axios.post(
            'http://localhost:3333/companies',
            this.company,
          );
          this.getCompanies();
          this.clear();
          this.$vToastify.success({
            title: 'Sucesso',
            body: 'Empresa cadastrada',
            type: 'success',
            canTimeout: true,
            duration: 2000,
          });
        } else {
          const response = await axios.put(
            `http://localhost:3333/companies/${this.id}`,
            this.company,
          );
          this.getCompanies();
          this.clear();
          this.$vToastify.success({
            title: 'Sucesso',
            body: 'Empresa atualizada',
            type: 'success',
            canTimeout: true,
            duration: 2000,
          });
        }
      } catch (error) {
        this.$vToastify.error({
          title: 'Erro',
          body: 'Falha na operaçāo',
          type: 'error',
          canTimeout: true,
          duration: 2000,
        });
      }
    },
    async deleteCompany(company) {
      try {
        this.id = company.id;
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Esta operaçāo é irreversível. Deseja apagar o produto?')) {
          await axios.delete(`http://localhost:3333/companies/${this.id}`);
          this.getCompanies();
          this.clear();
          this.$vToastify.success({
            title: 'Sucesso',
            body: 'Empresa excluida',
            type: 'success',
            canTimeout: true,
            duration: 2000,
          });
        }
      } catch (error) {
        this.$vToastify.error({
          title: 'Erro',
          body: 'Falha na operaçāo',
          type: 'error',
          canTimeout: true,
          duration: 2000,
        });
      }
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
  min-width: 546px;
}

.form__title {
  padding: 20px 5px;
  background-color: #f0f1f4;
}

.form__content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px 0 0 20px;
  height: 90px;
  flex-wrap: wrap;

  input {
    background: rgba(100, 100, 100, 0.1);
    border: 0;
    border-radius: 5px;
    height: 35px;
    padding: 0 15px;
    color: rgba(3, 3, 3, 0.7);
    margin-right: 15px;
    margin-top: 5px;
    &::placeholder {
      color: rgba(3, 3, 3, 0.4);
    }
  }

  #name-company {
    width: 400px;
  }

  #cnpj {
    width: 250px;
  }

  button {
    background-color: #42b983;
    color: #fff;
    width: 150px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
  }
  button + button {
    margin-left: 10px;
    background-color: #fb6340;
  }
}

.table__container {
  display: flex;
  background: #f8f9fa;
  margin: 0 100px;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  min-width: 595px;

  table {
    min-width: 595px;
  }

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
