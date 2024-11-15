import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
// bg-[#fd6756]
const App = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(){
    const input = document.querySelector(".input");
    setTasks([...tasks,{"val":input.value, "id":crypto.randomUUID(),"completed":false}]);
    input.value="";
  }

  function isComplete(taskId){
    setTasks(tasks.map((task)=>(
      task.id === taskId ? {...task,"completed":!task.completed}:task
    )));
  };

  function deleteTask(taskId){
    setTasks(tasks.filter((task)=>(
      task.id !== taskId 
    )));
  }

  const editTask = (taskId, newTitle) => {
    setTasks(tasks.map((task) => (
      task.id === taskId ? { ...task, val: newTitle } : task
    )));
  };

  return (
  <div className="bg-[rgb(243,242,241)] min-h-80 border-2 rounded-lg shadow-lg shadow-slate-900 p-3">
    <Header />
    <div className="bg-[#e4e4e4] flex items-center rounded-full">
      <input type="text" className="input bg-[#e4e4e4] flex-grow px-2 rounded-l-full focus:outline-none text-violet-600" />
      <button onClick={()=>{addTask()}} className="px-8 py-2 bg-violet-800 rounded-r-full text-white hover:shadow-xl hover:bg-violet-700 shadow-black">
        Add
      </button>
    </div>
    <ToDoList 
      tasks={tasks}
      isCompleted={isComplete}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  </div>

  )
}

export default App