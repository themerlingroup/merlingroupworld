import React from 'react'
import {CookiesProvider} from 'react-cookie';
import CustomizedDialogs from './formcomponents/diaglog';
import Registration from './formcomponents/registration';
function Contact () {
  return (
    <div className='form-modal'>
    <CookiesProvider>
    <CustomizedDialogs>
        <Registration />
    </CustomizedDialogs>
    </CookiesProvider>
    </div>
  )
}

export default Contact