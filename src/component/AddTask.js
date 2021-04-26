import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            time:''
        }
    }

    linkList = () =>{
        this.props.closeForm()
    }
    handleAddTask = () => {
        this.props.addTask(this.state.name,this.state.time);
        this.linkList();
    }
    isChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    isChangeTime = (e) => {
        this.setState({
            time: e.target.value
        })
    }
    render(){
            return(
                <React.Fragment>
                    <div className="container">
                        <h2>Add New Task</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter name of task"
                            onChange={this.isChangeName}/>
                            <input type="datetime-local" className="form-control" placeholder="Enter time of task"
                            onChange={this.isChangeTime}/>
                        </div>

                        <button type="submit" style={{marginRight: 5+ 'px'}} className="btn btn-default" onClick={this.handleAddTask}>Add</button>
                        <button type="button" className="btn btn-default" onClick={this.linkList}>Back</button>
                    </div>
                </React.Fragment>
            );
        }
}

export default AddTask;