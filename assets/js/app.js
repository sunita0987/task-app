const tasks = [
    "Learning Javascript",
    "Learning Javascript",
    "Learning Javascript",
    "Learning Javascript",
    "Learning Javascript"
];

const taskList = document.getElementById("task-list");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <div class="task" id="task-${index}">
                <span>${task}</span>
                <div class="icons">
                    <i class="far fa-check-circle" onclick="completeTask(${index})"></i>
                    <i class="far fa-trash-alt" onclick="deleteTask(${index})"></i>
                </div>
            </div>
        `;
    });
}

function completeTask(index) {
    const task = document.getElementById(`task-${index}`);
    task.classList.toggle("completed");
    task.querySelector(".fa-check-circle").classList.toggle("fas");
    task.querySelector(".fa-check-circle").classList.toggle("fa-check-circle");
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();