<!--
<template>
	<div :class="`country ${country.done ? 'is-complete' : ''}`">
		<div class="content">{{ country.content }}</div>
		
		<div class="buttons">
			<!--<button @click="toggleDone">{{ country.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeCountry" class="delete">Delete</button>
		</div>
		
	</div>
</template>



<script>
export default {
	props: ['country'],
	methods: {
		/*
		toggleDone() {0
			this.$store.commit('TOGGLE_COUNTRY', this.country);
		},
		*/
		removeCountry() {
			this.$store.commit('REMOVE_COUNTRY', this.country);
		}
	}
}
</script>

<style>

</style>
-->