<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link v-for="item in userList" :to="{name: 'User', params: {userId: item.id}}" :key="item.id">{{item.username}}</router-link>    
    <h2>Ecosystem</h2>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        userList: [
            {
                id: 1,
                username:'user1'
            },
             {
                id: 2,
                username:'user2'
            },
             {
                id: 3,
                username:'user3'
            },
             {
                id: 4,
                username:'user4'
            },
             {
                id: 5,
                username:'user5'
            },
             {
                id: 6,
                username:'user6'
            },
        ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
