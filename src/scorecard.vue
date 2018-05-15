<template>
	<div class="scorecard">
		<div class="titledate">{{titleDate}}
		</div>
		<goallist :goalProp="goals.goal"></goallist>
	</div>
</template>


<script>

import goallist from './goallist.vue'
import {db} from './firebase';
var todosRef = db.ref('scorecards/0/title')

import firebase from 'firebase'

	export default {
		components: {goallist},
		props: [ 'goalProp', 'titleProp'],
		name: 'scorecard',
		data() {
			return {
				tester: "hey",
				title: this.titleProp,
				goals: this.goalProp
				// goals: [
				// 	{ goal: "Have a clean apartment", complete:0 },
				// 	{ goal: "Go Outside", complete:0 },
				// 	{ goal: "Exercise", complete:0 },
				// 	{ goal: "Wake up early", complete:0 },
				// 	{ goal: "Go to bed early", complete:0 }
				// ]
			}
		},
		computed: {
			titleDate() {
	
				var valueGetter = Object.values(this.titleProp)
				return valueGetter[0]

				// return this.tester
			}
		}
		, mounted: function() {
			console.log(this.titleDate)
		}
	}
</script>


<style scoped>
	.scorecard {
		/*width: 80%;*/
	    margin: 0 20px;
	    border-radius: 20px;
	    /*border: 2px solid #7F7E7E;*/
	    background: white;
	    color: black;
	    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}

	.titledate {
		color: #0D47A1;
		font-weight: bold;
		font-size: 16px;
		padding: 10px 0px;
		    border-bottom: 1px solid #7F7E7E;
	}

/*	

	.scorecard div {
		flex:1;
		justify-content: flex-end;
	}*/

</style>