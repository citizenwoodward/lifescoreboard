<template>
	<div class="createcard">
		<div class="header1"> Create Your Scorecard 
			<svg style="position:relative;left:5px;top:5px;width:24px;height:24px" viewBox="0 0 24 24">
    			<path fill="#0D47A1" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,	17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
    		</svg> 
    	</div>
		<inputlist :goalProp="goals"></inputlist>
		<input class="row input-wrap" 
		v-model.trim="newTodoText"
        @keyup.enter="addTodo"
        placeholder="Add new goal">

	</div>
</template>

<script>

import inputlist from './inputlist.vue'
import {db} from './firebase';

var todosRef = db.ref('goals')

	export default {
		components: {inputlist},
		props: [ 'goalProp'],
		name: 'createcard',
		data() {
			return {
				tester: "hey",
				newTodoText: "",
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
		methods: {
			 addTodo: function () {
            if (this.newTodoText) {
              todosRef.push({
                goal: this.newTodoText,
                 complete: 0
              })
              this.newTodoText = ''
            }
          },
		}
	}
</script>


<style scoped>
	.createcard {
		margin: 20px;
		margin-bottom: 20px;
	}

	.newgoal {
		border-bottom: 2px solid black;
	}

</style>