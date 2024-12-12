import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reserve = () => {
    const initialValue = {
        firstname:"",
        date:"",
        email:""
    }
    const [data, setData] = useState(initialValue)
    
    const navigate = useNavigate() 
    
    const handleOnChange = (e)=>{
        
      setData(
        {   ...data,
            [e.target.name]:e.target.value
        }
      )  

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(data);
        setData(initialValue)
        localStorage.setItem('reserve', JSON.stringify(data))
        navigate("/")
        
    }

  return (
    <div>Reserve
 <form>
        <input
          
          type="text" name="firstname" value={data.firstname}
          placeholder="Introduce tu nombre"
          onChange={handleOnChange}
         
        />
        <input type="email" name="email" value={data.email} placeholder='Introduce tu email'
        onChange={handleOnChange}
        />
        <input type="date" name="date" value={data.date}
        placeholder="Introduce una fecha"
        onChange={handleOnChange}
        />
   <button onClick={handleSubmit}>Enviar</button>
</form>
    </div>
    
  )
}


export default Reserve