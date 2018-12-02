import React from "react";

class ClassComponent extends React.Component{
	constructor(props){
		super(props); //позволяет работать с переданными переменными
		this.state={
			a:5,
			dasd:5645,
			string:"temp"
		};// создает состояние обьекта
	}	//Вызывается при создании обьекта
	render(){
		this.state.a = 10;
		return <div>
			<div>Hello from component2</div>
			<div>{this.state.a}</div>
		</div>
	}//нужен для отрисовки обьекта в ДОМ дереве
}
//позволяет видеть этот файл всему проектку
export default ClassComponent;
