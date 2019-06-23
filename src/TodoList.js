import React from 'react';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			inputValue: ''
		};
	}
	HandleClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});
	}
	handeChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}
	handleItemClick(index) {
		let list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list
		});
	}
	render() {
		return (
			<div className="App">
				<div>
					<input
						value={this.state.inputValue}
						onChange={this.handeChange.bind(this)}
					/>
					<button onClick={this.HandleClick.bind(this)}>add</button>
				</div>
				<ul>
					{this.state.list.map((item, index) => {
						return (
							<li
								key={index}
								onClick={this.handleItemClick.bind(this, index)}
							>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default TodoList;
