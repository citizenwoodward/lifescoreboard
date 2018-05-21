<template>
	<div class="row">
			<div class="row-goal"> 
				<input v-model="goalProp.goal"  @blur="updateGoal(goalProp, $event.target.value)">
			</div>
			<div @click="deleteGoal(goalProp)">
				<svg style="width:24px;height:24px" viewBox="0 0 24 24">
					<path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
				</svg>
			</div>	
		</div>	

</template>

<script>
import add from './add.vue'
import {db} from './firebase';

var createRef = db.ref('newcard')

import firebase from 'firebase'

	export default {
			name: 'inputgoal',
			components: {add},
			props: [ 'goalProp'],
			data() {
				return {
					newGoal: this.goalProp,
					innerGoal: 0
				}
			},
			methods: {
			  	updateGoal: function (goal, newText) {
				  	console.log(goal)
				  	delete createRef.child(goal['.key'])
				  	createRef.child(goal['.key']).child('goal').set(newText)
			  	
          		},
          		deleteGoal: function(goal) {
          			createRef.child(goal['.key']).remove()
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