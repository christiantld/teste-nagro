<template>
  <div class="home">
    <NavBar />
    <div class="form__container">
      <h3 class="form__title">Cadastrar Produto</h3>
      <form @submit.prevent class="form__content">
        <div class="inputs">
          <input
            type="text"
            id="name-product"
            placeholder="Nome do produto"
            autocomplete="off"
            maxlength="50"
            required
            v-model.trim.lazy="product.name"
          />
          <select required v-model="product.companyId">
            <option selected disabled value>Escolha uma empresa</option>
            <option
              v-for="company in companies"
              :value="company.id"
              :key="company.id"
            >{{company.name}}</option>
          </select>
        </div>
        <div class="buttons">
          <button @click="saveProduct">{{!productId ? 'Cadastrar' : 'Atualizar'}}</button>
          <button v-if="productId" @click="cancelEditProduct" >Cancelar</button>
        </div>
      </form>
    </div>

    <div class="table__wrapper">
      <div class="table__selector">
        <p>Desejo ver os produtos da empresa: </p>
          <select v-model="companyIdSearch" @change="getProducts">
            <option selected disabled>Escolha uma empresa</option>
            <option
              v-for="company in companies"
              :value="company.id"
              :key="company.id"
            >{{company.name}}</option>
          </select>
      </div>
      <div class="table__container" v-if="companyIdSearch">
      <table>
        <thead v-if="products.length === 0">
          <th>Nenhum Produto cadastrado para essa empresa</th>
        </thead>
        <thead v-else>
          <tr>
            <th>Nome do Produto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <span>{{product.name}}</span>
            </td>

            <td>
              <div class="buttons">
                <button @click="editProduct(product)">Alterar</button>
                <button @click="deleteProduct(product)">Excluir</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      userId: this.getUserId(),
      product: {
        companyId: '',
        name: '',
      },
      products: [],
      productId: null,
      companyIdSearch: null,
      companies: [],
    };
  },
  components: {
    NavBar,
  },
  methods: {
    clear() {
      this.product.companyId = '';
      this.product.name = '';
      this.productId = null;
      delete this.product.id;
    },
    getUserId() {
      const userId = localStorage.getItem('userId');
      return userId;
    },

    getCompanyId() {
      console.log(this.companyIdSearch);
    },
    editProduct(product) {
      this.product = product;
      this.productId = product.id;
    },
    cancelEditProduct() {
      this.clear();
      this.getProducts();
    },

    async getCompanies() {
      const response = await axios.get(
        `http://localhost:3333/companies?_sort=name&_order=asc&userId=${this.userId}`,
      );
      const companies = response.data;
      this.companies = companies;
    },

    async getProducts() {
      const response = await axios.get(
        `http://localhost:3333/products?_sort=name&_order=asc&companyId=${this.companyIdSearch}`,
      );
      const products = response.data;
      this.products = products;
    },

    async saveProduct() {
      if (!this.product.name || !this.product.companyId) {
        return;
      }

      if (!this.productId) {
        const response = await axios.post(
          'http://localhost:3333/products',
          this.product,
        );
        console.log(response.data);
        this.getProducts();
        this.clear();
      } else {
        const response = await axios.put(
          `http://localhost:3333/products/${this.productId}`,
          this.product,
        );
        console.log(response.data);
        this.getProducts();
        this.clear();
      }
    },

    async deleteProduct(product) {
      this.productId = product.id;
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Esta operaçāo é irreversível. Deseja apagar o produto?')) {
        await axios.delete(`http://localhost:3333/products/${this.productId}`);
        this.getProducts();
        this.clear();
      }
    },
  },
  beforeMount() {
    this.getCompanies();
  },
};
</script>

<style lang="scss" scoped>

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
  justify-content: space-evenly;
  margin: 20px 0 0 20px;
  height: 90px;
  flex-wrap: wrap;

  #name-product {
    width: 400px;
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

  #name-product {
    width: 300px;
  }

  .inputs {
    select {
      padding: 10px;
      width: 200px;
      border: none;
      border-radius: 5px;
      background: rgba(100, 100, 100, 0.1);
      color: rgba(100, 100, 100, 0.8);
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
    background-color: #fb6340;
  }
}

.table__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.table__selector {
  display: flex;
 background-color: #f0f1f4;
  margin: 0 100px;
  justify-content: space-evenly;
  align-items:center;
  margin-top: 20px;
  width: 35%;
  padding: 5px;
  border-radius: 8px 8px 0 0;

  p {
    font-size: 16px;
    font-weight: bold;
  }

  select {
      padding: 10px;
      width: 200px;
      border: none;
      border-radius: 5px;
      background: rgba(100, 100, 100, 0.1);
      color: rgba(100, 100, 100, 0.8);
    }
}

.table__container {
  display: flex;
  background: #f8f9fa;
  margin: 0 100px;
  justify-content: center;
  flex-direction: column;
  min-width: 500px;
  width: 35%;

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
    font-size: 15px;
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
