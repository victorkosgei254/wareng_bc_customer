
const cartItems = [

    {product:"Roofing nails", quantity:120, measure:"kgs", unitPrice: 120},
    {product:"Roofing nails", quantity:120, measure:"kgs", unitPrice: 120},
    {product:"Roofing nails", quantity:120, measure:"kgs", unitPrice: 120},
    {product:"Roofing nails", quantity:120, measure:"kgs", unitPrice: 120},
    {product:"Roofing nails", quantity:120, measure:"kgs", unitPrice: 120},
    {product:"Roofing nails", quantity:120, measure:"kgs", unitPrice: 120}
]
function Cart(props)
{
    console.log(props)
    return (
        <div className="wbc-cart">
            <div className="header">
                <h1>Cart</h1>
            </div>
            <div className="content">
            <table className="cart">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price p.u </th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                    <tbody>
                        {cartItems.map(item =>
                        <tr>
                            <td>{item.product}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.quantity * item.unitPrice}</td>

                            <td>Add,Remove</td>
                        </tr>)
                                }
                        </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total</td>
                        <td colSpan={2}>123</td>
                    </tr>
                    </tfoot>
            </table>
            </div>
            <div className="actions">
                <a href="#">Place Order</a>
                <a href="#">Download Invoice</a>
            </div>
        </div>
    )
}
export default Cart;
