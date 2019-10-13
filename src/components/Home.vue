<template>
  <div class="home">
    <br />
    <div class="container">
      <div class="card">
        <div class="card-header">
          <ul>
            <li>
              <a
                class="nav-item nav-link active newItem"
                href="#"
                v-on:click="toggleForm($event,0)"
              >New Item</a>
            </li>
            <li>
              <a
                class="nav-item nav-link active newItem"
                href="#"
                v-on:click="toggleForm($event,1)"
              >Search Item</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div v-if="formIndex==0">
            <newItem />
          </div>
          <div v-else-if="formIndex==1">
            <searchItem/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import newItem from "./HomeForm/NewItem.vue";
import searchItem from "./HomeForm/SearchItem.vue";
export default {
  name: "Home",
  props: ["tasks"],
  components: {
    newItem,
    searchItem
  },
  data() {
    return {
      index:this.$parent.index,
      items: [],
      formIndex: 0
    };
  },
  methods: {
    toggleForm(event, index){
         event.preventDefault();
         this.formIndex = index;
         
    }
  },
  created(){
     this.items = this.tasks;
     this.$children[0].index = this.index;

  },
  destroyed(){
     this.$parent.index = this.index;
     this.$parent.items = this.items;
  }
};
</script>

<style >
ul {
  padding: 0;
  list-style: none;
  display: table;
}

li {
  display: table-cell;
  position: relative;
}

a {
  color: #000000;
  text-transform: uppercase;

  text-decoration: none;
  display: inline-block;
  padding-left: 15px;
  position: relative;
}

.newItem:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.newItem:hover:after {
  width: 100%;
  left: 0;
}
</style>