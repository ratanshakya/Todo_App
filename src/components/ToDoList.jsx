import ToDoItem from "./ToDoItem";

const ToDoList = ({tasks,isCompleted,deleteTask,editTask}) => {  
  return (
    <div className="text-violet-600 mt-5 px-2 font-medium">
        <ul className="TodList max-h-52 overflow-y-auto px-2">
            {tasks.map((task)=>(
                <ToDoItem
                    key={task.id}
                    task={task}
                    isCompleted={isCompleted}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
            ))}
        </ul>
    </div>
  );
};

export default ToDoList;
