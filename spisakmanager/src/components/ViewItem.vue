<template>
  <div id="view-item">
    <ul class="collection with-header">
      <li class="collection-header"> <h3>{{name}}</h3></li>
      <li class="collection-item">Item ID#: {{item_id}}</li>
      <li class="collection-item">Amunt: {{amount}}</li>
      <li class="collection-item">
        <label>
          <input id="available" class="filled-in" type="checkbox" v-model="available" disabled>
          <span>Available</span>
        </label>
      </li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button class="btn red" @click="deleteItem">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'edit-item', params: {item_id: item_id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil-ruler"></i>
      </router-link>
    </div>
  </div>

</template>

<script>
  import db from './firebaseInit'

  export default {
    name: 'view-item',
    data() {
      return {
        item_id: null,
        name: null,
        amount: null,
        available: null
      }
    },
    beforeRouteEnter(to, from, next) {
      db.collection('items').where('item_id', '==', to.params.item_id).get()
        .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.item_id = doc.data().item_id
            vm.name = doc.data().name
            vm.amount = doc.data().amount
            vm.available = doc.data().available
        })
      })
    })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        db.collection('items').where('item_id', '==', this.$route.params.item_id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.item_id = doc.data().item_id
              this.name = doc.data().name
              this.amount = doc.data().amount
              this.available = doc.data().available
          })
        });
      },
      deleteItem() {
        if(confirm('Are you sure?')) {
          db.collection('items').where('item_id', '==', this.$route.params.item_id).get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                doc.ref.delete()
                this.$router.push('/')
            })
          })
        }
      }
    }
  }
</script>
