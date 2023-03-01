export function addToCart(item)
{
    console.log("add to card dispatched")
    return function(dispatch)
    {
        dispatch({type:"ADD_TO_CART", payload:item})
    }
}


export function removeFromCart(item)
{
    return function(dispatch)
    {
        dispatch({type:"REMOVE_FROM_CART",payload:item})
    }
}
