import del from "../assets/trash.png";
import edit from "../assets/write.png";
import save from "../assets/save.png";
import { useState } from "react";

const ToDoItem = ({task,isCompleted,deleteTask,editTask}) => {
  const [isEditing,setIsEditing] = useState(false);
  const [newTitle,setNewTitle] = useState(task.val); 
  
  function handleEdit(){
    editTask(task.id,newTitle);
    setIsEditing(false);
  }

    const trim = (task) => {
        const maxLength = 20;    
        if (task.length > maxLength) {
            return task.slice(0, maxLength) + '...';
        }
        return task;
    };
  return (
    <li className="mb-2">
        <div className="flex justify-between items-center">
          <input
            className="checkbox h-[100%] transform scale-150"
            type="checkbox"
            checked={task.completed}
            onChange={()=>{isCompleted(task.id)}}
          />
          {isEditing?(
                <input 
                type="text" 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
              />
          ):(
            <label className={`ml-2 todoLabel ${task.completed?"completed":""}`} title={task.val}>{trim(task.val)}</label>
          )}
          <div className="actions flex gap-4">
            {isEditing?(
              <img
              className="bg-violet-600 hover:bg-violet-900 rounded-full hover:shadow-lg cursor-pointer p-1 shadow-violet-950"
              style={{ width: "25px", height: "25px" }}
              src={save}
              alt="save task"
              onClick={handleEdit}
            />
            ):(
              <img
              className="bg-violet-600 hover:bg-violet-900 rounded-full hover:shadow-lg cursor-pointer p-1 shadow-violet-950"
              style={{ width: "25px", height: "25px" }}
              src={edit}
              alt="Edit task"
              onClick={() => setIsEditing(true)}
            />
            )}
            <img
              className="bg-violet-600 hover:bg-violet-900 rounded-full hover:shadow-lg cursor-pointer p-1 shadow-violet-950"
              style={{ width: "25px" }}
              src={del}
              alt="Delete task"
              onClick={()=>deleteTask(task.id)}
            />
            </div>
        </div>
    </li>
  )
}

export default ToDoItem