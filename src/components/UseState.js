import React,{useEffect,useState} from 'react'
import {useForm} from './useForm'

const UseState = () => {
    const [values,setValues] = useForm({firstName: '',lastName: '',email: '', password: '',entries: 10})
    const [size,setSize] = useState([])
   // const [entry,setEntry] = useState(10)

    useEffect(() => {
        console.log('render')
        console.log(size)
        console.log(values)
    },[size,values])
    return (
        <div>
            <input 
            name="email" 
            type="email"
            value={values.email} 
            onChange={setValues}
            placeholder="email"
            />

            <input 
            name="password" 
            type="password"
            value={values.password} 
            onChange={setValues}
            placeholder="password"
            /><br/>

            <input 
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={setValues}
            placeholder="first name"
            />

            <input 
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={setValues}
            placeholder="last name"
            />

            <select 
            name="entries" 
            id="entries"
            onChange={setValues}
            >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="80">80</option>
            </select>
             

           <input type="checkbox" name="size" id="small" value='small' onChange={e => {
            if(e.target.checked){
                setSize(currentSize => {
                    currentSize.map((item) => {
                        if(item === e.target.value){
                            return [...currentSize]
                        }
                        else{
                            return [...currentSize, e.target.value]
                    }}
                    )
                })
            }
        }} />
            <label htmlFor="small">Small</label><br/>

            <input type="checkbox" name="size" id="medium" value="medium" onChange={e => {
                if(e.target.checked){
                    setSize(currentSize => [...currentSize,e.target.value])
                }
            }} />
            <label htmlFor="medium">Medium</label><br/>

            {/*<input type="checkbox" name="size" id="large" value="large" onChange={(e) => setSize(e.target.value)} />
            <label htmlFor="large">Large</label><br/>

            
        <input type="submit" value="Submit" />*/}



        </div>
    )
}

export default UseState
