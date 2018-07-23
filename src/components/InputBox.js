import React, { Component } from 'react';
import './InputBox.css'

class InputBox extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick () {
		var len = this.props.nums;
		var newid = len > 0 ? len : 0;
		var value = this.refs.myText.value;
		if (value !== '') {
			var obj = {
				id: newid,
				task: value,
				status: 0
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}
	render() {
		return (
			<div className="InputBox">
				<span>事件</span>
				<input className="inp" type="text" ref="myText" placeholder="你想做点什么"/>
				<input className="saveTask" type="button" value="保存" onClick={this.handleClick}/>
			</div>
		)	
	}
}

export default InputBox;