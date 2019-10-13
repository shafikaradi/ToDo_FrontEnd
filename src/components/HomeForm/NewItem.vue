<template>
  <div>
    <form>
      <div class="form-group">
        <label for="InputItem">Add New Item To Do List</label>
        <input
          type="text"
          class="form-control"
          id="InputItem"
          aria-describedby="emailHelp"
          placeholder="Enter Item"
          v-model="todo"
        />
      </div>

      <button v-on:click="addItem" type="submit" class="btn btn-primary">+</button>
    </form>
  </div>
</template>




<script>
export default {
  name: "newItem",
  data(){
     return{
        
         todo:""
     }
  },
  methods: {
    addItem(e) {
      e.preventDefault();  
      this.$parent.index+=1;
      this.$parent.items.push({id: this.$parent.index, todo:this.todo})
      this.todo = ""
    }
  }
};
</script>