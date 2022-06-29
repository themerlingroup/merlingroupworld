import React, {useState} from 'react';
import '../App.css';
import axios from 'axios';
function Registration() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const handleChange = (e) => {
    const {id, value} = e.target;
    if(id === "name") {
      setName(value)
    }
    if(id === "email") {
      setEmail(value)
    }
    if(id === "phone") {
      setPhone(value)
    }
  }
  const handleSubmit = () => {
    const newContact = {
      name: '',
      email: '',
      phone: ''
    }
    console.log(newContact);
    axios.post('http://localhost:5001/contact/add', newContact)
      .then(res => console.log(res.data))
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  }
  return (
    <div className='form'>
      <div className="form-body">
              <div className="username">
                  <label className="form__label" for="Name">Name </label>
                  <input className="form__input" type="text" value = {name} onChange ={(e) => handleChange(e)} id="name" placeholder="Company"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" value = {email} onChange ={(e) => handleChange(e)} placeholder="Email" required/>
              </div>
              <div className="phone-number">
                  <label className="form__label" for="password">Phone Number </label>
                  <input className="form__input" type="phone"  id="phone" value = {phone} onChange ={(e) => handleChange(e)} placeholder="Phone Number" required/>
              </div>
          </div>
          <div className='form-footer'>
            <button className='btn btn-primary form_label' onClick={() => handleSubmit()} type='submit'>Submit</button>
          </div>
    </div>
  )
}

export default Registration