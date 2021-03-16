import React,{useState} from 'react'

const CounterDemo = () => {
    const [count,setCount] = useState(0)
    
    const handleClick = () => {
        setCount(count + 1)
    }

    if(count === 5){
           throw new Error("Error Occured")
    }else {
        return (
            <div>
            {count}
            <button onClick={handleClick}>Increment</button>
            </div>
        )
    }  
}

export default CounterDemo