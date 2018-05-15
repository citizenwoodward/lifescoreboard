<template>
<div class="createcard">
  <div class="header1"> Create Your Scorecard
    <svg style="position:relative;left:5px;top:5px;width:24px;height:24px"
         viewBox="0 0 24 24">
      <path fill="#0D47A1"
            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,	17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
    </svg>
  </div>
  <div> {{ momentTitle }} </div>
  <inputlist :goalProp="creates"></inputlist>
  <input class="row input-wrap"
         v-model.trim="newTodoText"
         @keyup.enter="addTodo"
         placeholder="Add new goal">
  <button @click="addList()"> Submit </button>
</div>

</template>

<script>
import moment from 'moment';
import inputlist from './inputlist.vue';
import { db } from './firebase';

var todosRef = db.ref('goals')

var scoreRef = db.ref('scorecards/')

export default {
  components: {
    inputlist
  },
  props: [
    'createProp',
    'scoreProp'
  ],
  name: 'createcard',
  data() {
    return {
      newTodoText: '',
      creates: this.createProp
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoText) {
        todosRef.push({
          goal: this.newTodoText,
          complete: 0
        })
        this.newTodoText = ''
      }
    },
    addList: function() {

      const obj = this.creates

      for (var i = 0; i < obj.length; i++) {
        delete obj[i]['.key']
      // console.log(obj[i]['.key'])
      }

      console.log(obj)

      scoreRef.push({

        // goal: this.newTodoText,
        // complete: 0
        goals: obj,
        title: this.momentTitle
      })

    }
  },
  mounted: function() {
    console.log(scoreRef)
  },
  computed: {
    momentTitle: function() {
      return moment().format('MMMM Do, YYYY')
    }
  }
}

</script>

<style scoped="">
.createcard {
  margin: 20px;
  margin-bottom: 20px;
}

.newgoal {
  border-bottom: 2px solid black;
}
</style>
