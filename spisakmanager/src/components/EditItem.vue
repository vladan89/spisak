<template>
  <div id="view-item">
    <ul class="collection with-header">
      <li class="collection-header"> <h3>{{name}}</h3></li>
      <li class="collection-item">Item ID#: {{item_id}}</li>
      <li class="collection-item">Amunt: {{amount}}</li>
      <li class="collection-item">Available: {{available? 'YES' : 'NO'}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button class="btn red" @click="updateItem">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'edit-item', params: {item_id: item_id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil-ruler"></i>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'edit-item',
  data() {
    return {

    }
  }
}
</script>
