<template>
	<div>
		<!-- <createcard :goalProp="goalsRef" :titleProp="titleRef"></createcard>
    	<scorecard :goalProp="goalsRef" :titleProp="titleRef"></scorecard> -->
    	
    	<div v-for="board in reverseBoards">
    		<scorecard :scoreProp="board"></scorecard>
    	</div>
    	
	</div>
</template>


<script>

// import goallist from './goallist.vue'
// import {db} from './firebase';
// var todosRef = db.ref('scorecards/0/title')

// import firebase from 'firebase'

import scorecard from './scorecard.vue'
import createcard from './createcard.vue'

	export default {
		components: {scorecard, createcard},
		props: [ 'scoreProp'],
		name: 'scoreboard',
		data() {
			return {
				boards: this.scoreProp
			}
		},
		computed: {
			reverseBoards() {
        	return this.boards.slice().reverse();
 		 }    

			// titleDate() {
	
			// 	var valueGetter = Object.values(this.titleProp)
			// 	return valueGetter[0]

			// 	// return this.tester
			// }
		}, 
		mounted: function() {
		}
	}
</script>


<style scoped>

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