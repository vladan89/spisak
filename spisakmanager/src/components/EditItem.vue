<template>
  <div id="view-item">
    <ul class="collection with-header">
      <li class="collection-header">
        <input type="text" v-model="item_id"/>
        <label>ID:</label>
      </li>
      <li class="collection-item">
        <input type="text" v-model="name"/>
        <label>Name:</label>
      </li>
      <li class="collection-item">
        <input type="text" v-model="amount"/>
        <label>Amount:</label>
      </li>
      <li class="collection-item">
        <label>
          <input id="available" class="filled-in" type="checkbox" v-model="available"/>
          <span>Available</span>
        </label>
      </li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button class="btn red" @click="updateItem">Update</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'edit-item', params: {item_id: item_id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil-ruler"></i>
      </router-link>
    </div>
  </div>

</template>

<script>
  import db from './firebaseInit';

  export default {
    name: 'edit-item',
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
    methods: {
      updateItem() {
        db.collection('items').where('item_id', '==', this.$route.params.item_id).get()
          .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({
            item_id: this.item_id,
            name: this.name,
            amount: this.amount,
            available: this.available
        })
      })
        this.$router.push('/')
      })
      }
    }
  }
</script>
