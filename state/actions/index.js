export const increment = () => {
    return {
        type: 'INC'
    }
}

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

export const changeTodoInput = (text) => {
    return {
        type: "changeTodo",
        text: text,
    }
}
