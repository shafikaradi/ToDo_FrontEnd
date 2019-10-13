<template>
  <div>
    <form>
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="InputItem"
            placeholder="Search Item by ID"
            v-on:change="getIndexFromInput($event)"
            v-model="val"
          />
        </div>
        <div class="col">
        <button type="submit" class="btn btn-info" v-on:click="searchItem">
          <span class="glyphicon glyphicon-search" aria-hidden="false"></span> Search
        </button>
        </div>
      </div>
    </form>

    <br />


<div v-show="toggleSearchResultTable" >
    <table v-if="items && items[index - 1] && index && items.length > 0" class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{items[index - 1].id}}</td>
          <td>{{items[index - 1].todo}}</td>
        </tr>
      </tbody>
    </table>

    <div class="alert alert-danger" role="alert" v-else>
      No Item is available under this ID
      <button
        type="button"
        class="close"
        aria-label="Close"
        v-on:click="closeAlert"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "searchItem",
  data() {
    return {
      index:null,
      toggleSearchResultTable: false,
      items:this.$parent.items,
      val:''
    };
  },
  methods: {
    searchItem(e) {
      e.preventDefault();
      this.index = parseInt(this.index)
      this.toggleSearchResultTable = true;
    },
    closeAlert(e){
         e.preventDefault();
         this.val = '';
         this.toggleSearchResultTable = false
    },
    getIndexFromInput(e){
      this.index = e.target.value
    }
  }
};
</script>