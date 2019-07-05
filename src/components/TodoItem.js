import React, { Component } from 'react';
import './TodoItem.css'

export default class TodoItem extends Component {
    handleFinished = () => {
        const { item, finishedChange } = this.props
        var status = item.status;
        status = (status === 0 ? 1 : 0);
        var obj = {
            id: item.id,
            name: item.name,
            status: status
        }
        finishedChange(obj);
    }

    handleDelete = () => {
        const { item, totalChange } = this.props
        totalChange(item);
    }

    render() {
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
                <span onClick={this.handleFinished}>{item.task}</span>
                <span onClick={this.handleDelete} className="delete-btn">删除</span>
            </li>
        )
    }
}
