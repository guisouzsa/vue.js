const { createApp } = Vue;

const componentBotao = {
  template: '<button @click="alerta()">{{ mensagem }}</button>',
  props: {
    mensagem: {
      type: String,
      default: 'Olá Mundo'
    }
  },
  methods: {
    alerta() {
      alert(this.mensagem);
    }
  }
};

const app = createApp({
  components: {
    'botao-click': componentBotao,
  },
  data() {
    return {
      numero: 0,
      resultadoSoma: 0,
      itens: [
        { nome: 'item 1', preco: 10 },
        { nome: 'item 2', preco: 20 },
        { nome: 'item 3', preco: 30 }
      ]
    };
  },
  methods: {
    somar() {
      const valor = Number(this.numero);
      if (!isNaN(valor)) {
        this.resultadoSoma += valor;
        this.numero = 0;
      }
    }
  }
});

app.mount('#app');
