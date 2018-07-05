Vue.component('item', {
  props: ['item'],
  template: '<div>'
            + '<span class="name">{{ item.name }}</span>&nbsp;'
            + '<span class="amount">{{ item.amount }}</span>'
            + '</div>'
});

var app = new Vue({
  el: '#app',
  data: {
    newItem: {
      name: '',
      amount: ''
    },
    list: [
      {id: 0, name: 'Hleb', amount: '3'},
      {id: 1, name: "Meso", amount: '2kg'},
      {id: 2, name: "Mleko", amount: "1l"}
    ]
  },
    firebase: function () {
        return {
            anArray: db.ref('url/to/my/collection/')
        }
    },
  methods: {
      blabla: function(event) {
          this.list.push({id: this.list.length, name: this.newItem.name, amount: this.newItem.amount});
      }
  }
});
