import React, { useState } from "react";
import {FaAmazonPay} from "react-icons/fa";
import order from "./order";

const showOrders=(props)=>{
    let summa=0
    props.order.forEach(el =>summa+=Number.parseFloat(el.price))
    return(<div>
        {props.order.map(el =>(
        <order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className="summa">Сумма:{summa}$</p>
    </div>

    )
}

const showNothing =() =>{
    return(<div className="empty">
        <h2>Товаров нет</h2>
    </div>)
}

export default function header(props){
    let[cartOpen,setCartOpen]=useState(false)
    return(
    <header>
        <div>
            <span className="logo"> House Staff</span>
            <ul className="nav">
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaAmazonPay onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button${cartOpen &&'active'}`}/>
        </div>

        {cartOpen &&(
            <div className="shop-cart">
              {props.orders.length > 0 ?
            showOrders(props):showNothing()}
            </div>
        )}
        <div className="presentation"></div>
    </header>
    )
}