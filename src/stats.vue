<template>
<div>
  <!-- <createcard :goalProp="goalsRef" :titleProp="titleRef"></createcard>
    	<scorecard :goalProp="goalsRef" :titleProp="titleRef"></scorecard> -->
  <!-- 	<div v-for="board in boards">
    		{{board}}
    	</div> -->
  <!-- {{firstStat}} -->
  Total Score: {{completeStat}} / {{completeStatTotal}} 
  <br> Goals:
  <div v-for="goalStat in goalStat">  {{goalStat.name}}: {{goalStat.numbo}} </div>
</div>

</template>

<script>
// import goallist from './goallist.vue'
// import {db} from './firebase';
// var todosRef = db.ref('scorecards/0/title')

// import firebase from 'firebase'

import scorecard from './scorecard.vue';
import createcard from './createcard.vue';

export default {
  components: {
    scorecard,
    createcard
  },
  props: [
    'scoreProp'
  ],
  name: 'stats',
  data() {
    return {
      boards: this.scoreProp
    }
  },
  methods: {
    find_duplicate_in_array: function(arra1) {
      console.log(arra1)
      let i
      const len = arra1.length
      const result = []
      const obj = {}
      for (i = 0; i < len; i++) {
        obj[arra1[i]] = 0
      }
      for (i in obj) {
        result.push(i)
      }
      return result
      console.log(result)
    },
    goalStater: function(goalText) {
      var statsList = []
      var statsListTotal = []
      var statsListTotal2 = 0
      var statsText = ''
      var result
      for (var i = 0; i < this.boards.length; i++) {
        for (var j = 0; j < this.boards[i].goals.length; j++) {
          statsListTotal.push(this.boards[i].goals[j].goal)
        }
      }

      for (var i = 0; i < statsListTotal.length; i++) {
        if (statsListTotal[i] === goalText) {
          console.log(i)
          statsText = statsListTotal[i]
          statsListTotal2++

        }
      }
      return statsText + '' + statsListTotal2
    // this.find_duplicate_in_array(statsListTotal)
    }
  },
  computed: {
    goalStat() {
      var statsList = []
      var statsListTotal = []
      var statsListTotal2 = 0
      var statsText = ''
      var result
      for (var i = 0; i < this.boards.length; i++) {
        for (var j = 0; j < this.boards[i].goals.length; j++) {
       	console.log(this.boards[i].goals[j].complete)
          statsListTotal.push(this.boards[i].goals[j].goal)
        }
      }

      var lister = statsListTotal.filter(function(elem, index, self) {
    		return index === self.indexOf(elem);
		})

      var outputList = [];

      for (var i = 0; i < lister.length; i++ ) {
      	namecheck(lister[i])
      }

      var outputer; 
      var outputList;

      function namecheck(name) {
      	 
        var numbo = 0
        // console.log(name)
        for (var i = 0; i < statsListTotal.length; i++) {
          if (statsListTotal[i] === name) {
            numbo++;
            // console.log(name + numbo);
            outputer = {name, numbo};
          }
        }
        outputList.push(outputer)
      }
         return outputList
    },
    completeStat() {
      var statsList = []
      var statsListTotal = 0
      for (var i = 0; i < this.boards.length; i++) {
        for (var j = 0; j < this.boards[i].goals.length; j++) {
          statsList.push(this.boards[i].goals[j].complete)

        }
      }
      // function getSum(total, num) {
      //     return total + num;
      // }
      function second() {
        for (var i = 0; i < statsList.length; i++) {
          // console.log(statsList[i])
          statsListTotal += statsList[i]
        }
      }
      second()

      return statsListTotal

      // console.log(statsList.reduce(getSum))
      // var statsListTotal = statsList.reduce(getSum)
      // console.log(statsListTotal)
      // statsList

    // return statsList
    },
    completeStatTotal() {
      var statsList = []
      for (var i = 0; i < this.boards.length; i++) {
        for (var j = 0; j < this.boards[i].goals.length; j++) {
          // console.log(this.boards[i].goals[i])
          statsList.push(this.boards[i].goals[j].complete)
        }
      }
      // console.log(statsList)
      return statsList.length
    }
  },
  mounted: function() {
    // this.stater()
  }
}

</script>

<style scoped="">
.scorecard {
  /*width: 80%;*/
  margin: 0 20px;
  border-radius: 20px;
  /*border: 2px solid #7F7E7E;*/
  background: white;
  color: black;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.titledate {
  color: #0D47A1;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 0px;
  border-bottom: 1px solid #7F7E7E;
}
</style>
