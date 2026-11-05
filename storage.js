const STORAGE_KEY = "teamTaskManager";

export function saveTasks(tasks) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(tasks)
        );

        return true;
    } catch (error) {
        console.error("Unable to save tasks:", error);
        return false;
    }
}

export function loadTasks() {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY);

        return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
        console.error("Unable to load tasks:", error);
        return [];
    }
}

export function clearTasks() {
    localStorage.removeItem(STORAGE_KEY);
}