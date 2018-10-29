export default {
	props: ['num'],
	methods: {
		add() {
			this.$emit('addNum', this.num + 1);
		},
		reduce() {
			this.$emit('addNum', this.num - 1);
		},
	},
	render() {
		return (
			<div>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.reduce}>点我-1</button>
			</div>
		);
	},
};
