export function updateDashboard(tasks) {
    document.getElementById("totalTasks").textContent =
        tasks.length;

    document.getElementById("pendingTasks").textContent =
        tasks.filter(task => task.status === "Pending").length;

    document.getElementById("completedTasks").textContent =
        tasks.filter(task => task.status === "Completed").length;
}

export function displayTasks(tasks) {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks available.</p>";
        return;
    }

    tasks.forEach(task => {
        const card = document.createElement("div");
        card.className = "task-card";

        const title = document.createElement("h3");
        title.textContent = task.title;

        const assigned = document.createElement("p");
        assigned.textContent = "Assigned to: " + task.assigned;

        const status = document.createElement("p");
        status.textContent = "Status: " + task.status;

        const priority = document.createElement("p");
        priority.textContent = "Priority: " + task.priority;

        card.append(title, assigned, status, priority);
        taskList.appendChild(card);
    });
}
