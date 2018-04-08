<template>
	<div>
		<div class="input-wrap" v-for="goal in goals">
			<inputgoal :goalProp="goal"></inputgoal>	
		</div>
	</div>
</template>


<script>

import inputgoal from './inputgoal.vue'

	export default {
		components: {inputgoal},
		props: [ 'goalProp'],
		name: 'inputist',
		data() {
			return {
				tester: "hey",
				goals: this.goalProp
				// goals: [
				// 	{ goal: "Have a clean apartment", complete:0 },
				// 	{ goal: "Go Outside", complete:0 },
				// 	{ goal: "Exercise", complete:0 },
				// 	{ goal: "Wake up early", complete:0 },
				// 	{ goal: "Go to bed early", complete:0 }
				// ]
			}
		}
	}
</script>


<style scoped>


/*	

	.scorecard div {
		flex:1;
		justify-content: flex-end;
	}*/

</style>