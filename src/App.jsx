import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Counter from './counter';
import Azan from './componets/azan';
import blog from './data/blog';

function App() {
  

  return (
    <>
  <div 
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  }}
>
  {blog.map((v) => (
    <Counter
      key={v.id}
      id={v.id}
      title={v.title}
      description={v.description}
    />
  ))}
</div>
  


     
      {/* <Azan hh="qadir" cc="azan" /> */}
    </>
  )
}

export default App
