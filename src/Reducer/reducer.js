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
        default: return state
    }
}
export default todoData;