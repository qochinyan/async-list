import "./Item.scss"

const Item =({el})=>{
    return <div className="item-container">
       <span className="item-index"><img className="id-img" src="https://cdn-icons-png.flaticon.com/512/5584/5584493.png" alt="" />{el.id}</span>
       <span className="item-removing--time">{el.removingIn}</span>
    </div>
}
export default Item