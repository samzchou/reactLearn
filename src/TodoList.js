import React from 'react';
import TodoItem from './TodoItem';
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
	handleDelete(index) {
		console.log('handleDelete', index);
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
							<TodoItem
								key={index}
								content={item}
								index={index}
								delete={this.handleDelete.bind(this)}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default TodoList;
