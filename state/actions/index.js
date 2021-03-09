export const addTodo = (text) => {
    return {
        type: "addTodo",
        text: text,
    }
}

export const delTodo = (id) => {
    return {
        type: "delTodo",
        id: id,
    }
}

export const sortTodo = (data) => {
    return {
        type: "sortTodo",
        data: data,
    }
}

export const toggleTodo = (id) => {
    return {
        type: "toggleTodo",
        id: id,
    }
}

export const delDisabledTodo = (id) => {
    return {
        type: "delDisabledTodo",
        id: id,
    }
}

export const toggleLock = () => {
    return {
        type: "toggleLock",
    }
}
export const changeTodoInput = (text) => {
    return {
        type: "changeTodo",
        text: text,
    }
}
