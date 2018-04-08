<template>
	<div class="row-center">
		<div @click="minusFunc"> - </div>
	</div>
</template>

<script>
	export default {
			name: 'addButton',
			props: [ 'goalProp'],
			data() {
				return {
					newGoal: this.goalProp,
					innerGoal: 0
				}
			},
			methods: {
				minusFunc: function() {
				console.log(this.newGoal)
				// this.newGoal++
				this.newGoal--
				this.$emit('subtract')
				}
			}
		}
</script>

<style scoped>
	div {
		font-size: 20px;
		margin: 0 20px;
	}

</style>