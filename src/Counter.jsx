import React, { useReducer } from 'react'

const Counter = (p) => {
    return (
        <div style={{ height: "200px", backgroundColor: "bisque" ,width:"250px", padding:"20px"}}>
            <h1>{p.title}</h1>
            <h3>{p.description}</h3>
            <h3>{p.id}</h3>
        </div>
    )

}

export default Counter
