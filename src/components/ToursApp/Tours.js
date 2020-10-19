import { useEffect, useState } from "react"
import React from "react"
import Tour from "./Tour"
import "./tours.css"

const url = 'https://course-api.netlify.app/api/react-tours-project'

const Tours = () =>{
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)

const fetchTours = () =>{
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=> {
        console.log(data)
        setTours(data)
        setLoading(false)
    })
    .catch((error)=>console.log(error))
}

useEffect(()=>{
fetchTours()
},[])

const removeTour= (id) =>{
    const newTour = tours.filter((tour)=> tour.id !==id )
    setTours(newTour)
}

    if(loading){
        return(
        <div className="loading">
            <h1>loading...</h1>
        </div>)
    }
    if (tours.length === 0) {
        return (
        <main>
            <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={() => fetchTours()}>
                refresh
            </button>
            </div>
        </main>
    );
  }
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}
export default Tours

