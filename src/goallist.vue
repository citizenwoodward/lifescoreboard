<template>
	<div>
		<div class="scorecard" v-for="goal in goals">
		
			<goal :goalProp="goal"></goal>	
			
		</div>
	</div>
</template>


<script>

import goal from './goal.vue'

	export default {
		components: {goal},
		props: [ 'goalProp'],
		name: 'goalist',
		data() {
			return {
				goals: this.goalProp
			}
		}
	}
</script>


<style scoped>
	.scorecard {
		/*margin-bottom:20px;*/
		border-bottom: 1px solid #7F7E7E ; 
	}

	.scorecard:first-child {
		border-top: 1px solid #7F7E7E;
	}

	.scorecard:last-child {
		border-bottom: none;
	}

/*	

	.scorecard div {
		flex:1;
		justify-content: flex-end;
	}*/

</style>