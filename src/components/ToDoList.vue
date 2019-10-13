<template>
  <div class="toDoList">
    <h1 id="header">{{headerTitle}}</h1>

    <div id="toDoTableContent" class="container">
      <div v-show="!isSpinnerHidden" class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-show="!isTableHidden">
        <table v-if="tasks && tasks.length > 0" class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Task</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="x in tasks" :key="x.value">
              <td>{{x.id}}</td>
              <td>{{x.todo}}</td>
            </tr>
          </tbody>
        </table>
        <div class="alert alert-info" role="alert" v-else>
          No Task has been entered yet
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  props: ["tasks"],
  data() {
    return {
      todo: [],
      headerTitle: this.$parent.headerTitle,
      isSpinnerHidden: false,
      isTableHidden: true
    };
  },
  mounted() {},

  async created() {
    setTimeout(
      () => {
        this.isSpinnerHidden = true;
        this.isTableHidden = false;
      },

      1000
    );
  }
};
</script>

<style scoped>
.toDoList {
  text-align: center;
}

#header {
  padding-top: 30px;
}

#toDoTableContent {
  padding-top: 30px;
}
</style>