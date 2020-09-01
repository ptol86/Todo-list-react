
const baseUrl = "https://5ef08e01ad6d71001617a596.mockapi.io/api/v1/tasks";

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to create task")
        } 
    })
}

export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
}

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to update task")
        }
    })
}
export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "DELETE",
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete task")
        }
    });
}