import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import { Badge } from 'reactstrap';
import { Table } from 'reactstrap';
import Checked from '../image/checked.png';

class TaskList extends Component{
    constructor(props){
        super(props)
        this.state = {
            tasks: [
            {detail:'Go club', time:'22/3/2021 9am', complete: 'true', delete: true},
            {detail:'Go shopping', time:'22/3/2021 10am', complete: 'false', delete: false},
            {detail:'Go home', time:'22/3/2021 11am', complete: 'false', delete: false}
            ],
            showAddForm: false
        }
        //this.kiemtra = this.kiemtra.bind(this);
        //this.deleted = this.deleted.bind(this);
        this.Xoa = this.Xoa.bind(this);
    }

    setStatus = () => {
        this.setState({
            showAddForm: true
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false
        })
    }
    addTask = (name,time) => {
        let infor={detail:name,time:time,complete:'false',delete:false};       
        this.state.tasks.push(infor);
    }

    deleted(x) {
         
        const isdelete = x.delete;
        const index = this.state.tasks.indexOf(x);

        this.setState({
        tasks:
        [
          ...this.state.tasks.slice(0, index),
          {
            ...x,
            delete: !isdelete
          },
          ...this.state.tasks.slice(index+1)
        ]
        }
        );
    };  

    Xoa(){
        var temp = this.state.tasks;
        for(let i=0;i< temp.length;i++)
        {
            if(temp[i].delete === true)
            {
                this.setState({
                tasks:[
                    ...this.state.tasks.slice(0, i)
                    ,
                    ...this.state.tasks.slice(i+1)
                ]
                });
            }
        } 
    }

    render(){
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm} />
            )
        } else{
        return(
            <div className="container">
                <h1>To do App designed by <Badge color="success">Mountain</Badge></h1>
                <br />
                <br />
                <h2>List Task</h2>
                <Table hover className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name of task</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>    
                    <tbody>
                        {
                            this.state.tasks.map((task,index) =>
                             <TodoList key = {task.id}
                                       name={task}
                                       stt={index}
                                       url={task.complete ? Checked : ''}
                                       deleted={() => this.deleted(task)}/>
                            )
                        }
                    </tbody>
                </Table>
                <button type="submit" style={{marginRight: 5+ 'px'}} className="btn btn-default" onClick={this.setStatus}>Add Task</button>
                <button type="submit" style={{marginRight: 5+ 'px'}} className="btn btn-default" onClick={() =>{this.Xoa()}}>Delete Task</button>

            </div>
        )
        }
    }
}

export default TaskList;