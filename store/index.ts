import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ users: [] }),
  getters: {
    // getUsers: (state) => console.log(state.users, " hellop"),
    getUsers() {
      return this.users;
    },
  },
  actions: {
    async fetchUsers() {
      this.users = await $fetch("https://jsonplaceholder.typicode.com/posts");
      // console.log(this.users, " you called me");
    },
  },
});

export const userStatus = defineStore('user', ()=>{
  const admin = ref(false)
  const getadmin = ref()
  const set  = computed(()=> admin.value)
  const setadmin = computed (()=> getadmin.value)
  function changer(){
    admin.value = true
  }
return{getadmin, admin, set , changer,setadmin}

})


export const useCounterStore = defineStore('counter', {
  state: () => ({ count: false , name:''}),
  getters: {
    double: (state) => state.count ,
    seter:(state)=> state.name
  },
  actions: {
    increment() {
      console.log(this.count);
      console.log(this.name)
      this.count = true
    },
    decrement(){
      if(this.count == true){
        this.count = false
        this.name = ''
      }
      
    },
  },
})