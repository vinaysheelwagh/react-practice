import React, {useState, useEffect} from 'react'
import List from "./List"
import Alert from "./Alert"
import "./grocery.css"
import data from '../ReviewApp/data'

const GroceryList = () => {
   const [name, setName] = useState("")
   const [list, setList] = useState([])
   const [isEditing, setIsEditing] = useState(false)
   const [editId, setEditId] = useState(null)
   const [alert, setAlert] = useState({show:false,msg:"",type:""})

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name){
            showAlert(true, "danger", "Please enter")
        }else if(name && isEditing){
            setList(list.map((item)=>{
                if(item.id === editId){
                    return{...item,title:name}
                }
                return item
            }))
            setName("")
            setEditId(null)
            setIsEditing(false)
            showAlert(true,"success","Value Changed")
        }else{
            showAlert(true,"success","Item Added to the list")
            const newItem = {id: new Date().getTime().toString(), title: name}
            setList([...list, newItem])
            setName("")
        }
    }
    const showAlert = (show=false,type="",msg="")=>{
        setAlert({show,type,msg})
    }
    const clearList = ()=>{
        showAlert(true, "danger", 'empty list')
        setList([])
    }
    const removeItem = (id) =>{
        showAlert(true,"danger","Item removed")
        setList(list.filter((item)=> item.id !== id))
        setName("")
    }
    const editItem = (id) =>{
        const specificItem = list.find((item)=> item.id === id)
        setIsEditing(true)
        setEditId(id)
        setName(specificItem.title)
    }

    return (
      <section className="section-center">
      
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert = {showAlert}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
            <input 
                type="text" 
                className="grocery" 
                placeholder="eg. egg"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
                {isEditing ? "Edit": "Submit"}
            </button>
        </div>
      </form>
      {list.length > 0 && (
      <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem = {editItem}/>
          <button className="clear-btn" onClick={clearList}>Clear items</button>
      </div> 
      )}
      </section>
  )
}

export default GroceryList
