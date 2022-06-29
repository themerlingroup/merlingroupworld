import React from 'react'
import logo from './logo.png';
import Contact from './contact';
function Topbar ()  {

  return (
    <div className='Site-header'>

        <h3 className='intro'>The Merlin Group</h3>
       <h3 className='support'>The Merlin Group needs your support!</h3>

    <Contact />
       <div><img src={logo} className="merlin-logo" alt="logo" /></div>

       
    </div>

  )
}
export default Topbar;
