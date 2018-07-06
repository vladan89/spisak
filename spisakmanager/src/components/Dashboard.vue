<template>
  <div id="dashboard">
    <ui class="collection with-header">
      <li v-for="item in items" v-bind:key="item.id" class="collection-item">
          <span>
            <i class="status fa" v-bind:class="{'fa-check-circle text-success': item.available, 'fa-times-circle text-danger': !item.available,}"></i>
          </span>
          {{item.name}}, {{item.amount}}
      </li>
    </ui>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'dashboard',
  data() {
    return {
      items: []
    }
  },
  created() {
    db.collection('items').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id' : doc.id,
          'item_id' : doc.data().item_id,
          'name' : doc.data().name,
          'amount' : doc.data().amount,
          'available' : doc.data().available
        }
        this.items.push(data);
      })
    })
  }
}
</script>
