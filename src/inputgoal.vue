<template>
	<div class="row">
			<div class="row-goal"> 
				<input v-model="goalProp.goal"  @blur="updateGoal(goalProp, $event.target.value)">
			</div>
				
		</div>	

</template>

<script>
import add from './add.vue'
import {db} from './firebase';

var todosRef = db.ref('scorecards/0/goals')

import firebase from 'firebase'

	export default {
			name: 'inputgoal',
			components: {add},
			props: [ 'goalProp'],
			data() {
				return {
					newGoal: this.goalProp,
					innerGoal: 0,
					tododdd:todosRef
				}
			},
			 firebase: {
			     goalsRef: {
				      source: db.ref('scorecards/0/goals'),
				      asObject: true
				    },
				   
			  },
			methods: {
			  updateGoal: function (goal, newText) {
			  	console.log(goal)
			  	todosRef.child(goal['.key']).child('goal').set(newText)
			  	
          		}
			}
		}
</script>

<style scoped>
	.row {
		display: flex;
	}

	.row-goal {
		flex: 1;
	    justify-content: center;
	    flex-direction: column;
	    display: flex;
	    font-size: 20px;
	}
	.row-complete {
		flex:.5;
		font-size: 32px;
	}	
</style>