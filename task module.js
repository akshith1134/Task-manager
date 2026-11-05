export function createTask(title, description, assigned, priority, date) {
    if (!title.trim() || !assigned.trim()) {
        alert("Task title and assigned member are required.");
        return null;
    }

    return {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        assigned: assigned.trim(),
        priority: priority,
        date: date,
        status: "Pending"
    };
}

export function addTask(tasks, task) {
    if (!task) {
        return tasks;
    }

    return [...tasks, task];
}