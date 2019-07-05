import React, { Component } from 'react';
import './InputBox.css'

export default class InputBox extends Component {
	render() {
		const { nums, addNewTask } = this.props
		const handleClick = () => {
			var len = nums;
			var newid = len > 0 ? len : 0;
			var value = this.refs.myText.value;
			if (value !== '') {
				var obj = {
					id: newid,
					task: value,
					status: 0
				};
				this.refs.myText.value = '';
				addNewTask(obj)
			}
		}
		return (
			<div className="InputBox">
				<span>事件</span>
				<input className="inp" type="text" ref="myText" placeholder="你想做点什么" />
				<input className="saveTask" type="button" value="保存" onClick={handleClick} />
			</div>
		)
	}
}
