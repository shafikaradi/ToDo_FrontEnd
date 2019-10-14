<template>
  <div id="app">
    <div v-if="logOut"  >
             <Login />
            
    </div>

    <div v-else>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/ToDoList">To Do List</router-link>
          </div>
        </div>
      </nav>

      <router-view :tasks="items" />
    </div>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
export default {
  
  name: "app",
  components:{Login},
  data() {
    return {
      logOut: true,
      pass: { header: "Table of fetched contents" },
      headerTitle: "Tasks to do",
      items: [],
      index: 0
    };
  }
};
</script>

<style>
#content {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
