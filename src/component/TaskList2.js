import { useState } from "react";
import TodoList from './TodoList';
import AddTask from './AddTask';
import { Badge } from 'reactstrap';
import { Table } from 'reactstrap';
import Checked from '../image/checked.png';

function TaskList2(){
    var [tasks,setTask] = useState({
        task:[
        {detail:'Go club', time:'22/3/2021 9am', complete: true, delete: true},
        {detail:'Go shopping', time:'22/3/2021 10am', complete: false, delete: false},
        {detail:'Go home', time:'22/3/2021 11am', complete: false, delete: false}
        ],
        showAddForm: false});

        function close(){
            setTask( tasks = {task:tasks.task,
                showAddForm: false}
            );
        }

        function open(){
            setTask(tasks = {task:tasks.task, 
                    showAddForm: true}
            );
        }

        function add(name,time1) {
            var infor={ detail:name, time:time1, complete:false, delete:false};  
            setTask(
                (tasks = { 
                    task: [...tasks.task.slice(), infor], 
                    showAddForm: false
                })
            );
        }

        function deleted(x) {
         
            const isdelete = x.delete;
            const index = tasks.task.indexOf(x);
    
            setTask(
            tasks = {
                task:[
                ...tasks.task.slice(0, index),
                {
                ...x,
                delete: !isdelete
                },
                ...tasks.task.slice(index+1)
                ],
                /* showAddForm: "false" */
            }
            );
        };  
    
        function Xoa(){
             for(let i=0;i< tasks.task.length;i++)
            {
                if(tasks.task[i].delete === true)
                {
                    setTask(
                    tasks = {
                        task:[
                        ...tasks.task.slice(0, i)
                        ,
                        ...tasks.task.slice(i+1)
                    ],
                  
                });
                }
            } 
        }
 
        if (tasks.showAddForm === true) {  
            return (
                <AddTask addTask={add} closeForm={close} />
            )
        }else{
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
                                tasks.task.map((task,index) =>
                                 <TodoList
                                           name={task}
                                           stt={index}
                                           url={task.complete ? Checked : ''}
                                           deleted={() => deleted(task)} />
                                )
                            }
                        </tbody>
                    </Table>
                    <button type="submit" style={{marginRight: 5+ 'px'}} className="btn btn-default"  onClick={open} >Add Task</button>
                    <button type="submit" style={{marginRight: 5+ 'px'}} className="btn btn-default"  onClick={() =>{Xoa()}} >Delete Task</button>
    
                </div>
            )
        }

}

export default TaskList2;