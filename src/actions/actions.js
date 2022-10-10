export const addTodod = (data) =>{
    return {
        type: "ADD_TODO",
        payLoad:{
           
                id: new Date().getTime(),
                data:data,
         
            
        }
    }
}

export const deleteTodo = (id) =>{
    console.log(id)
    return {
        type: "DELETE_TODO",
        id    
    }
  
}

export const clearTodo = () =>{
    return {
        type: "CLEAR_TODO"
    }
}