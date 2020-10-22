import React, { useState, useReducer } from 'react'
import {data} from "./data"

const Cart = () => {

const defaultState = {
    itemList:  data,
    cartTotal: 1799.97
}

const reducer = (state,action)=>{
    // if(action.type==="ADD"){
    //     const total = 0
    //     console.log(state.itemList)
    //     for (let item in state.itemList){
    //         if (item.title === action.payload){
    //             item.amount += 1
    //             item.price *= 2
    //             total += item.amount * item.price
    //         }
    //     }
    //     return{
    //         ...state, 
    //         cartTotal: total
    //     }
    // }
}

const [totalItems, setTotalTtems] = useState(3)
const [shoppingList, dispatch] = useReducer(reducer, defaultState)
const style={
    width:"3rem",
    height:"3rem"
}

return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Number of items: {totalItems}</h2>
      <div>
          {shoppingList.itemList.map((item)=>{
              return <div key = {item.id} >
                <img src={item.img} style={style}/>
                <h3>{item.title}</h3>
                <h4>{item.price}</h4> 
                <button onClick={()=>dispatch({action:"ADD", payload:item.title})}>+</button>
                <h4>Amount: {item.amount}</h4>
                <button onClick={()=>dispatch({action:"SUB", payload:item.title})}>-</button>
              </div>
          })}
      </div>
      <div>Total Amount = ${shoppingList.cartTotal}</div>
    </div>
  )
}

export default Cart
