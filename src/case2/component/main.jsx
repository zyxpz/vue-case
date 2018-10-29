import { mapState, mapActions } from 'vuex';

export default {
	computed: {
    ...mapState({
    num: state => state.main.num,
  }),
  },
	methods: {
		...mapActions('main', [
			'add',
		]),
		...mapActions('main', [
			'reduce',
		]),
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
