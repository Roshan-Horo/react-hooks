import React,{useState} from 'react'

const Form = () => {
    const [isTrue,setIsTrue] = useState(false)
    const [values,setValues] = useState({sdate: '',ddate: ''})
    const [msg,setMsg] = useState('')



    const startDateHandler = (e) => {
       setStartDate(e.target.value)
       if('hello' === e.target.value){
           setIsTrue(true)
           setMsg('error message')
       } 
    }

    const handleChange = (e) => {
        const isCheckbox = e.target.type === 'checkbox'
        setValues({
            ...values,
            [e.target.name] : isCheckbox ? e.target.checked : e.target.value
        })  
     }

    

    return (
        <React.Fragment>
        <div className="contianer">
        <form>
          <label htmlFor="sdate">Start Date</label><br/>
          <input 
          type="text" 
          id="sdate"
          name="sdate" 
          value={values.sdate}
          onChange={startDateHandler}
          /><br/>
          {msg === '' && isTrue ? null : <React.Fragment><span className="errorMsg">{msg}</span><br/><br/></React.Fragment>}
          
          
          <label htmlFor="ddate">Due Date</label><br/>
          <input 
          type="text" 
          id="ddate" 
          name="ddate"
          value={dueDate}
          onChange={dueDateHandler}
          /><br/>
          {msg === '' && isTrue && <React.Fragment><span className="errorMsg">{msg}</span><br/><br/></React.Fragment>}
          
          <input type="submit" value="create" disabled/>
        </form>
      </div>
        </React.Fragment>
    )
}

export default Form
