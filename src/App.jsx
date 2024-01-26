import { useState } from 'react'


function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen "
      style={{backgroundColor: color}}
      >
      </div>
      <div className='fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center'>
      <div className='flex flex-wrap gap-3 shadow-lg bg-white justify-center rounded-3xl px-2 py-3'>
        <button
        className='outline-none px-4 border-spacing-1 rounded-md shadow-lg'
        style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}
        >RED</button>
         <button
        className='outline-none px-4 border-spacing-1 rounded-md shadow-lg'
        style={{backgroundColor:"orange"}}
        onClick={()=>setColor("orange")}
        >Orange</button>
         <button
        className='outline-none px-4 border-spacing-1 rounded-md shadow-lg'
        style={{backgroundColor:"yellow"}}
        onClick={()=>setColor("yellow")}
        >YELLOW</button>
         <button
        className='outline-none px-4 border-spacing-1 rounded-md shadow-lg'
        style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}
        >GREEN</button>
         <button
        className='outline-none px-4 border-spacing-1 rounded-md shadow-lg'
        style={{backgroundColor:"blue"}}
        onClick={()=>setColor("blue")}
        >BLUE</button>
        <button
        className='outline-none px-4 border-spacing-1 rounded-md shadow-lg'
        style={{backgroundColor:"indigo"}}
        onClick={()=>setColor("indigo")}
        >INDIGO</button>
        <button
        className='outline-none px-4 border-spacing-1 rounded-md shadow-lg'
        style={{backgroundColor:"Violet"}}
        onClick={()=>setColor("violet")}
        >VIOLET</button>

        </div> 
      </div>
    </>
  )
}

export default App
