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
  <div v-for="goalStat in goalStat">  {{goalStat.name}}: {{goalStat.compo2}} /{{goalStat.numbo}} </div>
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
       	  console.log(this.boards[i].goals[j].complete + this.boards[i].goals[j].goal)

          var fill = this.boards[i].goals[j].goal;
          var fill2 = this.boards[i].goals[j].complete; 
          var obj = { name: "", compo: 0}
          obj.name = fill;
          obj.compo = fill2;
          statsListTotal.push(obj)
          statsList.push(fill)

           // statsListTotal.push(this.boards[i].goals[j].goal)
          
        }
      }

      console.log(statsList)

      var lister = statsList.filter(function(elem, index, self) {
    		return index === self.indexOf(elem);
		})

      console.log(lister)

      var outputList = [];

      for (var i = 0; i < lister.length; i++ ) {
      	namecheck(lister[i])
      }

      var outputer; 
      var outputList;

      function namecheck(name) {
      
        var numbo = 0
        var compo = []
        for (var i = 0; i < statsListTotal.length; i++) {
          
          var oldName = statsListTotal[i].name

          if (oldName == name) {
            // console.log(name)
            // console.log(statsListTotal[i].compo + statsListTotal[i].compo)
            numbo++;
            compo.push(statsListTotal[i].compo)
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(compo.reduce(reducer));
            var compo2 = compo.reduce(reducer)
            // statsList[i]++
            // console.log(statsList[i])
            // console.log(name + numbo);
            outputer = {name, numbo, compo2};
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
