<template>
<div>
  <div class="row-complete">
    <div class="row-goal">
      {{newGoal.goal}}
    </div>
   <!--  <div class="button-wrap">
      <minus :goalProp="newGoal.complete"
             v-on:increment="incrementTotal"
             v-on:subtract="minusTotal"></minus>
      <add :goalProp="newGoal.complete"
           v-on:increment="incrementTotal"
           v-on:subtract="minusTotal"></add>
    </div> -->
    <div class="complete"> {{newGoal.complete}} </div>
  </div>
</div>

</template>

<script>
import add from './add.vue';
import minus from './minus.vue';

import { db } from './firebase';

var scoreRef = db.ref('scorecards/')

export default {
  name: 'goal',
  components: {
    add,
    minus
  },
  props: [
    'goalProp',
    'keyProp'
  ],
  data() {
    return {
      newGoal: this.goalProp,
      newKey: this.keyProp,
      innerGoal: 0
    }
  },
  firebase: function() {
    return {

      scoreRef: db.ref('scorecards')
    }
  },
  methods: {
    minusTotal: function() {
      if (this.newGoal.complete === 0) {
        this.newGoal.complete += 0
      } else {
        this.newGoal.complete -= 0.5;
         var newRef = db.ref('scorecards/' + this.newKey + '/goals/' + this.newGoal.key)

        console.log(newRef)

        newRef.update({
          complete: this.newGoal.complete
        })
      }

    },
    incrementTotal: function() {

      if (this.newGoal.complete === 1) {
        this.newGoal.complete += 0;
      } else {
        this.newGoal.complete += 0.5

        // console.log(obj.length)

        // scoreRef.update({complete: this.newGoal.complete})

        // for (var i = 0; i < obj.length; i++) {

        //   // console.log(obj[i]['.key'])
        //   var newKey = obj[i]['.key'];

        //   console.log(newKey)

        //    newRef = db.ref('scorecards/' + newKey);

        //   // newRef.push({
        //   //   complete: this.newGoal.complete
        //   // })
        // }

        var newRef = db.ref('scorecards/' + this.newKey + '/goals/' + this.newGoal.key)

        console.log(newRef)

        newRef.update({
          complete: this.newGoal.complete
        })

      }
    }
	},
	computed: {
			newKey2: function() {
				return this.newGoal['.key']
			}
		}
 
}

</script>

<style scoped="">
.row {
  display: flex;
}

.row-goal {
  flex: 1;
    justify-content: center;
    flex-direction: column;
    display: flex;
    font-size: 18px;
    line-height: 17px;
    text-align: left;
    margin-left: 10px;
    font-weight: 500;
}

.row-complete {
  flex: .5;
  font-size: 32px;
  display: flex;
}

.button-wrap {}

.complete {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #0D47A1;
    font-size: 32px;
    width: 60px;
    height: 60px;
    justify-content: center;
    border: 1px solid #7e7e7e;
    margin: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>
