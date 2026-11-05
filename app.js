
import { createTask, addTask } from "./task%20module.js";
import { searchAndFilterTasks } from "./task.js";
import { deleteTask, completeTask } from "./taskUtils.js";
import { saveTasks, loadTasks } from "./storage.js";
import { updateDashboard, displayTasks } from "./ui.js";

let tasks = loadTasks();

const taskForm = document.getElementById("taskForm");
const searchInput = document.getElementById("searchText");
const statusFilter = document.getElementById("statusFilter");

function renderTasks() {
    updateDashboard(tasks);

    const filteredTasks = searchAndFilterTasks(
        tasks,
        searchInput.value,
        statusFilter.value
    );

    displayTasks(filteredTasks);

    const taskList = document.getElementById("task_list");
    const cards = taskList.querySelectorAll(".task-card");

    cards.forEach((card, index) => {
        const task = filteredTasks[index];

        // Description
        const description = document.createElement("p");
        description.textContent =
            "Description: " + (task.description || "No description");
        card.appendChild(description);

        // Due date
        const date = document.createElement("p");
        date.textContent = "Due date: " + (task.date || "Not set");
        card.appendChild(date);

        // Buttons
        const actions = document.createElement("div");
        actions.className = "task-actions";

        const completeButton = document.createElement("button");
        completeButton.textContent =
            task.status === "Completed"
                ? "Mark Pending"
                : "Mark Completed";

        completeButton.onclick = () => {
            tasks = completeTask(tasks, task.id);
            saveTasks(tasks);
            renderTasks();
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = () => {
            if (confirm("Are you sure you want to delete this task?")) {
                tasks = deleteTask(tasks, task.id);
                saveTasks(tasks);
                renderTasks();
            }
        };

        actions.append(completeButton, deleteButton);
        card.appendChild(actions);
    });
}

// Add task
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = createTask(
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("assigned").value,
        document.getElementById("priority").value,
        document.getElementById("date").value
    );

    if (!task) return;

    tasks = addTask(tasks, task);
    saveTasks(tasks);

    taskForm.reset();
    renderTasks();
});

// Search
searchInput.addEventListener("input", renderTasks);

// Filter
statusFilter.addEventListener("change", renderTasks);

// Initial display
renderTasks();
