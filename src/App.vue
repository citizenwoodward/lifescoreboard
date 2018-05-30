<template>
  <div id="app">
    <div class="header-main">{{ msg }}</div class="header-main">
   <!--  <signup></signup> -->
 
   <signup v-on:signin="getUser"></signup>
   <div v-if="user">
     <createcard :createProp="createRef" :scoreProp="scoreRef"></createcard>
     <scoreboard :scoreProp="scoreRef"></scoreboard>
     <stats :scoreProp="scoreRef"></stats>  
  </div>
  </div>
</template>

<script>

import signup from './signup.vue'
import scoreboard from './scoreboard.vue'
import scorecard from './scorecard.vue'
import createcard from './createcard.vue'
import stats from './stats.vue'

import {db} from './firebase';
var todosRef = db.ref('scorecards/0/title')

export default {
  components: { signup, scoreboard, createcard, stats},
  name: 'app',
  data () {
    return {
      msg: 'Life Scoreboard',
      newText: 'hey',
      createList: this.createRef,
      user: ''
    }
  },
   firebase: function () {
    return {
      scoreRef: db.ref('scorecards'),
      createRef: db.ref('newcard'),
    }
  },
  methods: {
    getUser: function(user) {
      this.user = user;
    }
  },
  mounted: function() {
      console.log(this.createRef)
    }
}
</script>

<style>
body {
 margin: 0;
 background-color:#E0E0E0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0D47A1;
}

input {
  background: none;
  border: none;
  outline: none;
  font-size: 12px;
}

.input-wrap {
  padding: 15px 0 2px 0;
  border-bottom: 1px solid #7F7E7E;
}

.input-wrap:first-child {
  padding-top:10px;
}

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
.row {
  display: flex;
}
.row-center {
  display: flex;
  justify-content: center;
}

.header-main {
  font-weight: bold;
  font-size: 2em;
  padding: 20px 0 5px 0;
  background-color: #2196F3;
  margin-bottom: 20px;
  color: white;
}

.header1 {
  font-weight: bold;
  text-align: left;
  font-size: 18px;
}



</style>
