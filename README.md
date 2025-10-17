# O que é o Vue.js?

## Introdução

Vue.js é um framework progressivo para construção de interfaces de usuário. Ele é focado na camada de visualização e pode ser facilmente integrado com outras bibliotecas ou projetos existentes. Além disso, Vue também é perfeitamente capaz de alimentar aplicações web sofisticadas de página única (SPA - Single Page Applications).

## Principais características do Vue.js

- **Reatividade:** Vue usa um sistema reativo que atualiza automaticamente a interface quando os dados mudam.
- **Componentes:** Vue permite dividir a aplicação em componentes reutilizáveis e isolados, facilitando a manutenção e escalabilidade.
- **Simplicidade e Flexibilidade:** Fácil de aprender e usar, com uma curva de aprendizado suave e grande flexibilidade para projetos pequenos e grandes.
- **Ecossistema Rico:** Oferece ferramentas oficiais, como Vue Router para roteamento e Vuex para gerenciamento de estado, além de uma comunidade ativa.

## Por que usar Vue.js?

- **Leve e rápido:** Vue é pequeno em tamanho e otimizado para alto desempenho.
- **Documentação clara:** Possui uma documentação detalhada e acessível.
- **Comunidade ativa:** Grande quantidade de plugins, ferramentas e suporte da comunidade.
- **Integração fácil:** Pode ser adicionado a projetos já existentes sem grandes mudanças.

## Exemplo básico

```html
<div id="app">
  {{ message }}
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      message: 'Olá, Vue.js!'
    }
  })
</script>
