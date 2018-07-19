<template>
  <div id="new-item">
    <h3>New item</h3>
    <div class="row">
      <form v-on:submit.prevent="saveItem" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label> Name </label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="amount" required>
            <label> Amount </label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <label>
              <input id="available" class="filled-in" type="checkbox" v-model="available">
              <span>Available</span>
            </label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'new-item',
    data() {
      return {
        item_id: null,
        name: null,
        amount: null,
        available: false
      }
    },
    methods: {
      saveItem() {
        db.collection('items').get().then(snap => {
          db.collection('items').add({
            item_id: snap.size + 1,
            name: this.name,
            amount: this.amount,
            available: this.available
          }).then(docRef => this.$router.push('/'))
          .catch(error => console.log(error));
        });
      }
    }
  }
</script>
