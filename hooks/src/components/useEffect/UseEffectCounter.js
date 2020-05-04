import React,{useEffect,useState} from 'react'

const UseEffectCounter = () => {
    const [count, setcount] = useState(0);
    const [name,setName] = useState("");
    //By passing a second parameter to useEffect, rerender only occurs after the specified state changes
    useEffect(() =>{
        console.log('Updating document title....')
        document.title = `You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <button onClick={() => setcount(count +1)}>Click {count} times</button>  
        </div>
    )
}

export default UseEffectCounter
