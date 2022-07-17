import TaskList from "./TaskList"
import "./TaskBody.css"
import QuickTask from "./QuickTask"
import TaskDay from "./TaskDay"
const TaskBody = ()=>{
    return (<div className="Task_bg">
        
        <TaskDay/>
        <TaskList/>
        <QuickTask/>
    </div>)
}

export default TaskBody