const app = new Vue({
	el: '#app',
	data: {
		tasks: [
			{description: 'Go to the store', completed: false},
			{description: 'Finish the project', completed: false},
			{description: 'Watch Laracasts Vue 2 series', completed: false},
			{description: 'Read a book', completed: false},
			{description: 'Post on Smartprogress', completed: false},
			{description: 'Eat breakfast', completed: false}
		]
	},
	computed: {
		incompleteTasks() {
			return this.tasks.filter(task => !task.completed)
		},
		completeTasks() {
			return this.tasks.filter(task => task.completed)
		}
	},
	methods: {
		complete(task) {
			task.completed = !task.completed
		},
		checked(task) {
			return task.completed
		}
	}
})