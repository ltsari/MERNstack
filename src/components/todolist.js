import React from 'react';

class ToDoComponent extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			todos:[],
			input:"",
			showDone:true,
			showUndone:true,
			logs:[]
		}
	}
	addNewTask(e,id){
		//добавление задания
			var todos = this.state.todos;
			var task = {
				name:this.state.input,
				done:false
			};
			todos.push(task);
			this.setState({todos,input:""});
			//создания лог файла
			var action={
				time:new Date(),
				value:"Добавленна новая задача"
			}
			var logs = this.state.logs;
			logs.push(action);
			this.setState({logs});
	}
	inputChange(e){
		this.setState({input:e.target.value});
	}
	removeTask(e,index){
			var todos = this.state.todos;
			todos[index].done=!todos[index].done;
			this.setState({todos});
	}
//	new Date() => date + time + часовой пояс
	showDoneTasks(e){
			this.setState({showUndone:false, showDone:true});
	}
	showUnDoneTasks(e){
		this.setState({showUndone:true, showDone:false});
	}
	render(){
		return (
			<div>
					Новое задание:
					<input onChange={(e)=>this.inputChange(e)}  value={this.state.input}  />
					<button onClick={(e)=>this.addNewTask(e,"test")}>Добавить задание</button>
					<button onClick={(e)=>this.showDoneTasks(e)}>Показать сделанные задания </button>
					<button onClick={(e)=>this.showUnDoneTasks(e)}>Показать не сделанные задания</button>

				<br/>
					Созданные задания:
					<ul>
					{this.state.todos.map((x,index)=>{
						return (x.done && this.state.showDone)||(!x.done &&
							this.state.showUndone) ?
						 <li onClick={(e)=>{this.removeTask(e,index)}}>{x.name}</li>
							 : null}
					)}
				</ul>
				<h4>LOGS</h4>
				{this.state.logs.map(x=><div>{x.time.toString()} {x.value}</div>)}
			</div>
		)
	}
}

//function x (a){}
//(a)=>{}
export default ToDoComponent;
