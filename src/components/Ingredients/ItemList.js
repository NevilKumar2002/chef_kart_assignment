const ItemList = ({ items }) => {
    return (
        <div className="item-list">
        {items?.map(item => {
            return (
                <div key={item.name} className="list-item">
                    <p>{item.name}</p>
                    <p>{item.quantity}{item.quantity == parseInt(item.quantity) ? " Pc" : ""}</p>
                </div>
            )
        })
        }
        </div>
    )
}
export default ItemList;