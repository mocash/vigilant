import { useState, useEffect } from 'react'
import { FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData,setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })

  const {email, password} = formData;

  const onChange = (e)=>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.email]: e.target.value,


    }))

  }


const onSubmit = (e) =>{
  e.preventdefault()

}

  return <>
  
  <section className='heading'>
    <h1>
      <FaSignInAlt />
    </h1>
<p>
  Please Login
</p>
  </section>
  <section className='form'>
    <form onSubmit={onSubmit}>
    
    <div className='form-group'>

<input 
     type='email'
     className='form-control' 
     id='email' 
     name='email'
     value = {email} 
     placeholder = 'Enter Your Email'
     onChange = {onChange}  
     

      />

    </div>


    <div className='form-group'>

<input 
     type='password'
     className='form-control' 
     id='password' 
     name='password'
     value = {password} 
     placeholder = 'Enter Your Password'
     onChange = {onChange}  
     

      />

    </div>

    <div className='form-group'>
      <button className='btn btn-block' >Register</button>
    </div>
    </form>
  </section>
  </>
  
}

export default Login