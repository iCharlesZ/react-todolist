import React, { Component } from 'react';
import TodoItem from './TodoItem';
import InputBox from './InputBox';
import './TodoList.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { "id": 0, "task": "学习react", "status": 0 },
                { "id": 1, "task": "写一个todolist", "status": 1 }
            ]
        };
    }
    //添加新任务，在组件中以props的形式传递给子组件
    addTask(newitem) {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }
    //更新完成的任务，在组件中以props的形式传递给子组件
    updateFinished(todoItem) {
        console.log('updateFinished')
        var sum = 0;
        this.state.list.forEach((item) => {
            if (item.id === todoItem.id) {
                item.status = todoItem.status;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({
            finished: sum
        });
    }
    //更新任务总数，在组件中以props的形式传递给子组件
    updateTotal(todoItem) {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
                if (item.status === 1) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.updateFinished('')
    }

    render() {
        const { list, finished } = this.state
        return (
            <div className="container">
                <h1>TodoList</h1>
                <ul>
                    {list.map((item, index) =>
                        <TodoItem
                            item={item}
                            finishedChange={this.updateFinished.bind(this)}
                            totalChange={this.updateTotal.bind(this)}
                            key={index} />
                    )}
                    <li className="totalNum">{finished}已完成&nbsp;/&nbsp;{list.length}总数</li>
                </ul>
                <InputBox addNewTask={this.addTask.bind(this)} nums={list.length} />
            </div>
        )
    }
}
