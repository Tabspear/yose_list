import TaskNav from "./TaskNav"
import TaskList from "./TaskList"
import "./TaskBody.css"
import QuickTask from "./QuickTask"
import TaskDay from "./TaskDay"
import AddIcon from "./AddIcon"
const TaskBody = ()=>{
    return (<div className="Task_bg">
        <TaskNav/>
        <TaskDay/>
        <TaskList/>
        <AddIcon/>
        <QuickTask/>
    </div>)
}

export default TaskBody