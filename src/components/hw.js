import React from "react";

class Component extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return <div>Привет мир{this.props.parentNum*2}</div>
	}
}
export default Component
