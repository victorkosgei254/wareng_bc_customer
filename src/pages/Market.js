import Shop from "./Shop"
import Cart from "./Cart"
import "../assets/css/market.css"
function Market()
{
    return (
        <div className="wbc-market">
            <Cart />
            <Shop />
        </div>
    )
}
export default Market;


