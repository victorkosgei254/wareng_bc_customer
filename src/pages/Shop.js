const prods = [

    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"},
    {name:"Flooring",id:1,url:"#"}
]
function Shop()
{
    return (
        <div className="wbc-shop">
            <div className="header">
                <h1>WBC Market</h1>
            </div>
            <div className="content">
                <div className="categories">
                    <div className="header">
                        <b>Categories</b>
                    </div>
                    <nav>
                        <ul className="nav-container">
                            {prods.map(prod=><li><a href={prod.url}>{prod.name}</a></li>)}
                        </ul>
                    </nav>
                    <div className="categories-footer">
                        <b>18 More items</b>
                        </div>
                </div>
                <div className="products">
                    <div className="filter">
                        <i class="fa-regular fa-filter-list"></i>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Shop;
