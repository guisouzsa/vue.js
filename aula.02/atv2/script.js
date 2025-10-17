const { createApp } = Vue;

createApp({
  data() {
    return {
      numero: 0
    }
  },
  methods: {
    somar() {
      this.numero++;
    },
    diminuir() {
      this.numero--;
    }
  }
}).mount('#app');
