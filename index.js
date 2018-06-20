Vue.component('item', {
  props: ['item'],
  template: '<div>'
  + '<span class="name">{{ item.name }}</span>&nbsp;'
  + '<span class="amount">{{ item.amount }}</span>'
  + '</div>'
})

var app = new Vue({
  el: "#app",
  data: {
    newItem: {
      name: '',
      amount: ''
    },
    list: [
      {id: 0, name: "Hleb", amount: "3"},
      {id: 1, name: "Meso", amount: "2kg"},
      {id: 2, name: "Mleko", amount: "1l"}
    ]
  },
  methods: {
    add: function(event) {
      alert('Hello ' + this.list.length + '!');
      this.list.push(list.length, newItem.name, newItem.amount);
    }
  }
})
