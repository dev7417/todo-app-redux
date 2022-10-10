export const addTodod = (data) =>{
    return {
        type: "ADD_TODO",
        payLoad:{
            id: new Date().getTime(),
            data:data,
        }
    }
}

export const deleteTodo = () =>{
    return {
        type: "DELETE_TODO"
    }
}

export const clearTodo = () =>{
    return {
        type: "CLEAR_TODO"
    }
}