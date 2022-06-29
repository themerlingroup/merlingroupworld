import React from 'react'
import Github from './images/git.png';
import Twitter from './images/tweet.png';
import Linkedin from './images/ln.png';
const Socials = () => {
  return (
    <div className='socials'>
        <h3 className='outro'>Connect</h3>
        
      <div className='social-media'> <a href='https://www.linkedin.com/company/the-merlin-group/'>
            <img src={Linkedin} alt="" width="100px" className='lnk-img' />
        </a>
        <a href='https://twitter.com/sjsalgado4899'>
            <img src={Twitter} alt="" width="100px" className='lnk-img' />
        </a>
        <a href='https://github.com/themerlingroup'>
            <img src={Github} alt="" width="100px" className='lnk-img' />
        </a>
      </div>  
    </div>
  )
}

export default Socials
