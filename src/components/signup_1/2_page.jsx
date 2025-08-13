import React, { useState} from 'react'
import './2_page.css'
import FooterCommon from './Footer-common'
import Navbar_common from './Navbar-common'
import { useNavigate } from  'react-router-dom'

const Signup_first_page = () => {
    const navigate = useNavigate()
    const [data , setData] = useState({
        email: "",
        password : ""
    })
    
    const handleChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        if(!data.email && !data.password){
            alert("please fill email or password")
            return;
        }
        else{
            localStorage.setItem('userData', JSON.stringify(data));
            console.log('form submited', data);
            alert('Congradulation , your new account is created');
            navigate('/3_page');
        }
        }
    
  return (
     <div id='signupFirstPage'>
        <Navbar_common />
        <main>
            <div className="parentContainer">
                <div className="subContainer">
                    <form action="" className='formContainer' onSubmit={submit}>
                        <div className="textArea">
                            <span>STEP 1 OF 4</span>
                            <h1>Create a password to start your membership</h1>
                        </div>
                        <div className="inpurAreas">
                            <div>
                                <span className='SpanFontSize'>Just a few more steps and you're done!</span>
                            </div>
                            <span className='SpanFontSize'>We hate paperwork, too.</span>
                            <div className="inputField">
                               <ul className='inputUl'>
                                <li className='inputLi1'>
                                    <div className='inpBox1'>
                                        <label htmlFor="">Email</label>
                                        <div>
                                            <input type="email" name='email' value={data.email} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </li>
                                <li className='inputLi2'>
                                    <div className="inpBox2">
                                        <input type="password" placeholder='Add a Password' name='password' value={data.password} onChange={handleChange}/>
                                    </div>
                                </li>
                               </ul>
                            </div>
                        </div>

                         <div className="nextButton">
                            <button type='submit'><a>Next</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        <FooterCommon />

     </div>
  )
}

export default Signup_first_page
