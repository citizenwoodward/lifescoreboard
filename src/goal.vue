<template>
	<div>
		
		<div class="row-complete">
		<div class="row-goal"> 
			{{newGoal.goal}}
		</div>
	<div class="button-wrap">
				<minus :goalProp="newGoal.complete" v-on:increment="incrementTotal" v-on:subtract="minusTotal"></minus> 
				<add :goalProp="newGoal.complete" v-on:increment="incrementTotal" v-on:subtract="minusTotal"></add>
			</div> 
				<div class="complete"> {{newGoal.complete}} </div>
				</div>
	<!-- <div v-for="goal in newGoal" class="row">

			<div class="row-goal"> 
				<div> {{goal.goal}} </div> 
			</div>
			<div class="row-complete"> 
			<div class="button-wrap">
				<minus :goalProp="goal.complete" v-on:increment="incrementTotal" v-on:subtract="minusTotal"></minus> 
				<add :goalProp="goal.complete" v-on:increment="incrementTotal" v-on:subtract="minusTotal"></add>
			</div> 
				<div class="complete"> {{goal.complete}} </div>
			</div>			
		</div>	 -->
	</div>
</template>

<script>
import add from './add.vue'
import minus from './minus.vue'


	export default {
			name: 'goal',
			components: {add, minus},
			props: [ 'goalProp'],
			data() {
				return {
					newGoal: this.goalProp,
					innerGoal: 0
				}
			},
			methods: {
				minusTotal: function() {
			      	this.newGoal.complete--
		    	},
				incrementTotal: function() {
			      	this.newGoal.complete++ 
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
	    font-size: 16px;
	    line-height: 17px;
	    text-align: left;
	    margin-left:10px;
	}
	.row-complete {
		flex:.5;
		font-size: 32px;
		display: flex;
	}	

	.button-wrap {

	}

	.complete {
		padding-right: 20px;
	    display: flex;
	    align-items: center;
	    font-weight: bold;
	    color: #0D47A1;
	    font-size: 40px;
	}
</style>