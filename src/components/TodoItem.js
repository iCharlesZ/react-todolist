import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    } 
    handleFinished () {
        console.log('handleFinished')
        var status = this.props.item.status;
        status = (status === 0 ? 1 : 0);
        var obj = {
            id: this.props.item.id,
            name: this.props.item.name,
            status: status
        }
        this.props.finishedChange(obj); 
    }
    handleDelete() {
        console.log('handleDelete')
        this.props.totalChange(this.props.item);
    }
    render () {
        const item = this.props.item;
        const unfinish = {
            backgroundColor: '#DFFCB5',
            color: '#2EB872',
        };
        const finish = {
            backgroundColor: '#FFFA9D',
            color: '#FF9A3C',
            textDecoration: 'line-through'
        }
        var itemStyle = item.status === 0 ? unfinish : finish;
        return (
            <li key={item.id} style={itemStyle}>
                <span onClick={this.handleFinished}>{ item.task }</span>
                <span onClick={this.handleDelete} className="delete-btn">删除</span>
            </li>
        );
    }
}

export default TodoItem;
