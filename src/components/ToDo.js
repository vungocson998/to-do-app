import React from 'react';
import Task from './Task';
import FormTask from './FormTask';

function ToDo(props){
    const {tasks} = props;
    console.log("To do " + props);
    const taskList = tasks.map(task => {
        return(
            <Task name={task.name} detail={task.detail} time={task.time} id={task.id} key={task.id}/>
        )
    })
    return(
        <div className="to-do">
            <div className="to-do-title">
                To do list
            </div>
            <span> Click to done task | Double click to delete task</span>
            <FormTask />
            <ul className="task-wrapper">
                    <div className="task-wrapper-space">
                        {taskList.reverse()}
                    </div>
            </ul>
        </div>
    )
}

export default ToDo;