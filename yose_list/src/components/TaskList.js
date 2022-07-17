import CheckInput from "./CheckInput"
import "./TaskList.css"
const TaskList = ()=>{
 
    return <div className="list_wrapper">
        <div className="list_flex_container">
            <CheckInput/>
        <p className="task_title">Lorem 50</p>
        </div>   
        <p className ="task_date">Date</p>
    </div>


}


export default TaskList;