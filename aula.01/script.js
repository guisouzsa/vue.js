const { createApp } = Vue

createApp({
    data() {
        return {
            mensagem: 'Olá, Mundo! Aqui é sua pagina de teste',
            nome: 'Oi', 
            palavra: '',
            palavraCorreta: 'Olá'
        }
    }
}).mount('#app')
