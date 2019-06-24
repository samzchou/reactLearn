import React from 'react';
import TodoItem from './TodoItem';
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			inputValue: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.HandleBtnClick = this.HandleBtnClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	HandleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});
	}
	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}
	handleDelete(index) {
		let list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list: list
		});
	}
	getTodoItem(){
		return (
			this.state.list.map((item, index) => {
				return (
					<TodoItem
						key={index}
						content={item}
						index={index}
						delete={this.handleDelete}
					/>
				);
			})
		)
	}
	render() {
		return (
			<React.Fragment>
				<div>
					<input
						className='blue-input'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button style={{'background':'red'}} onClick={this.HandleBtnClick}>add</button>
				</div>
				<ul>{this.getTodoItem()}</ul>
			</React.Fragment>
		);
	}
}

export default TodoList;
