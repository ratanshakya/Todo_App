// Get references to form, input, and list
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Handle form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Add a new task
function addTask(text) {
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${text}</span>
        <button class="delete">✖</button>
    `;

    li.querySelector('.delete').addEventListener('click', () => {
        li.remove();
    });

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
}
