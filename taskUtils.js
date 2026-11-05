export function deleteTask(tasks, id) {
    return tasks.filter(task => task.id !== id);
}

export function completeTask(tasks, id) {
    return tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                status: task.status === "Completed"
                    ? "Pending"
                    : "Completed"
            };
        }

        return task;
    });
}

export function editTask(tasks, id, updatedData) {
    return tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                ...updatedData,
                id: task.id
            };
        }

        return task;
    });
}
