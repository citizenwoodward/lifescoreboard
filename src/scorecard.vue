<template>
	<div class="scorecard">
		<!-- <div v-for="goal in goals">
			{{goal.title}}
			<goallist :goalProp="goal.goals"></goallist>
		</div> -->
		<div class="titledate"> {{goals.title}} </div>
		<div @click="deleteGoal(goals)">
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
			</svg>
		</div>	
		<goallist :goalProp="goals.goals" :keyProp="newKey"></goallist>
	</div>
</template>


<script>

import goallist from './goallist.vue'
import firebase from 'firebase'
import { db } from './firebase';

var scoreRef = db.ref('scorecards/')

	export default {
		components: {goallist},
		props: [ 'scoreProp'],
		name: 'scorecard2',
		data() {
			return {
				tester: "hey",
				goals: this.scoreProp
			}
		},
		methods: {
			deleteGoal: function(goal) {
				console.log(scoreRef.child(goal['.key']))
          		scoreRef.child(goal['.key']).remove()
          	}
		},
		computed: {
			newKey: function() {
				return this.goals['.key']
			}
		}
	}
</script>


<style scoped>
	.scorecard {
		/*width: 80%;*/
	    margin: 0 20px;
	    margin-bottom: 20px;
	    border-radius: 20px;
	    /*border: 2px solid #7F7E7E;*/
	    background: white;
	    color: black;
	    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}

	.titledate {
		color: #0D47A1;
		font-weight: bold;
		font-size: 18px;
		padding: 10px 0px;
		/*border-bottom: 1px solid #7F7E7E;*/
	}

</style>