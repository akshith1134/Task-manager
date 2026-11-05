export function searchTasks(tasks, searchText) {
    const search = searchText.toLowerCase();

    return tasks.filter(task =>
        task.title.toLowerCase().includes(search) ||
        task.assigned.toLowerCase().includes(search)
    );
}

export function filterTasks(tasks, status) {
    if (status === "All") {
        return tasks;
    }

    return tasks.filter(task => task.status === status);
}

export function searchAndFilterTasks(tasks, searchText, status) {
    const searched = searchTasks(tasks, searchText);

    return filterTasks(searched, status);
}