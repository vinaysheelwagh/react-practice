import React, {useState} from "react"
import './index.css';

const BirthdayReminder = () =>{
    const [people, setPeople] = useState([
        {
            id: 1,
            name: "Birtie Yates",
            Age: 29,
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
        },
        {
            id: 2,
            name: "Hester Hogan",
            Age: 35,
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
        },
        {
            id: 3,
            name: "Larry Little",
            Age: 29,
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
        },
                {
            id: 4,
            name: "Sean Walsh",
            Age: 34,
            image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'        
        },
                {
            id: 5,
            name: "Lola Gardner",
            Age: 29,
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
        },
    ])
    
    return(
        <React.Fragment>
        <main>
        <article className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((item) => {
            const{id, name, Age,image} = item
            return(
                <article key={id} className="person"> 
                <img src={image} alt={name} />
                <div>
                <h4>{name}</h4>
                <p>{Age} years</p>
                </div>
            </article>
            )
        })}
        <button onClick={() => setPeople([])}>Clear All</button>
        </article>
        </main>
        </React.Fragment>
    )
}
export default BirthdayReminder