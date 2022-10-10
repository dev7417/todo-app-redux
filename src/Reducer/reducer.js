const initialState = {
    Lists:[]
}
const todoData = (state= initialState, action) =>{
   
    switch(action.type) {
        case "ADD_TODO":

        const {id, data} = action.payLoad;
        return{
            ...state,
            Lists: [
                ...state.Lists,
                {
                    id:id,
                    data:data
            }
        ]
        }
         case "DELETE_TODO":
     const newList = state.Lists.filter((item)=> item.id!== action.id)
     console.log(newList)
        return {
            ...state,
            Lists: newList
        }
        case "CLEAR_TODO":
            return{
                ...state,
                Lists:[]
            }
        default: return state
    }
  
}
export default todoData;