// vue2 component example
Vue.component('product', {
  props: {
    // props go here
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
    <div class="product">
      ...
    </div>
  `,
  data() {
    return {
      // data goes here
    }
  },
  methods: {
    // methods go here
  },
  computed: {
    // computed properties go here
  }
})

var ass = new Vue({
  el: '#app',
  data: {
    premium: true,
  }
})