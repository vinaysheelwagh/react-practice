import React, { useState } from 'react'
import data from "./data"

const TryComponent = () => {
    //const [category, setCategory] = useState("")
    const [menuList, setMenuList] = useState(data)

    const handleClick = (e) =>{
            if(e.target.value === "all"){
                setMenuList(data)
            }else{
                const newList = data.filter((item)=>
                item.category === e.target.value
            )
            setMenuList(newList)
            }            
    }
  return (
    <div>
        <h1>Our Menu</h1>
        <div>
            <button onClick={handleClick} value="all">All</button> 
            <button onClick={handleClick} value="breakfast">Breakfast</button> 
            <button onClick={handleClick} value="lunch">Lunch</button>
            <button onClick={handleClick} value="shakes">shakes</button>
        </div>
        <div>
            {menuList.map((item)=>{
                return<div key={item.id}>
                    <img src={item.img}/>
                    <h4>{item.title}      {item.price}</h4>
                    <p>{item.desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TryComponent
