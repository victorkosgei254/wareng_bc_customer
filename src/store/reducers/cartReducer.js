const reducer = (state = [], action)=>
{
    console.log("At the reducer")
    console.log(action)
    switch(action.type)
    {
        case "ADD_TO_CART":
            {
                console.log("ADDING TO CART")
                let newState =[...state,{item:1,qty:2,unit:"kgs",total:123}]
                console.log(newState)
                
                return newState
            };
        case "REMOVE_FROM_CART":
            {
                let newState=state.pop()
                return newState;
            }
        default:
            return state;
    }
}

export default reducer;
