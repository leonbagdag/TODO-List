import React from "react";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			list: ["Terminar los Repli", "Terminar los Proyectos"]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onRemoveItem = this.onRemoveItem.bind(this);
	}
	onRemoveItem = i => {
		this.setState(state => {
			const list = state.list.filter((item, j) => i !== j);

			return {
				list
			};
		});
	};

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState(state => {
			const list = [...state.list, state.value];

			return {
				list,
				value: ""
			};
		});
	};

	render() {
		return (
			<div className="container ">
				<div className="header">TODOS </div>
				<div className="todo-list ">
					<div className="list justify-content-center">
						<ul className=" list-group mx-auto justify-content-center">
							<div className=" list-group-item input">
								<form
									className="form-control form-control-lg"
									onSubmit={this.handleSubmit}>
									<label>
										<input
											className="border-0 "
											type="text"
											value={this.state.value}
											onChange={this.handleChange}
										/>
									</label>
								</form>
							</div>

							{this.state.list.map((item, index) => (
								<li className="list-group-item" key={item}>
									{item}
									<button
										className="float-right btn btn-outline border-0"
										type="button"
										onClick={() =>
											this.onRemoveItem(index)
										}>
										X
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default TodoList;
