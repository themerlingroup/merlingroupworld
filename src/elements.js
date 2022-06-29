import React from 'react'
import element from './images/Bitcoin-elements.jpg';
import decentralized from './images/decentralized.jpg';
import immutable from './images/immutable.jpg';
import security from './images/security.jpg';
import unitofacc from './images/unitofaccount.jpeg';
import pow from './images/pow.png';
import no3rd from './images/no-Third-Party.png';
import decent from './images/security.jpeg';
import Titles from './titles';
const  Elements = () => {

  return (
    <div>       

        <img src={element} className="btc-image" alt="picture" />
        <br>
          
        </br>
          <h1 className='elems'>Elements Explained</h1>

            <table className='elements'>
                <thead>
                <tr className='title'>
                    <th>Decentralized
                     <img src={decent} className='Decent' alt='pic' />

                    </th>
                    <th>Immutable
                    <img src={immutable} className="imm-img" alt='pic' />

                    </th>
                    <th>Security
                    <img src={security} className="secure" alt='pic' />

                    </th>
                    <th>Unit of Account
                    <img src={unitofacc} className="uoa" alt="pic" />

                    </th>
                    <th>Proof of Work
                    <img src={pow} className="pow" alt="pic" />

                    </th>
                    <th>No 3rd Party
                    <img src={no3rd} className="thirdparty" alt='pic' />

                    </th>
                    </tr>
                </thead>
                <tbody>
                    <Titles decentralized="Bitcoin is open to everyone, it is sovereign."
                     immutable="There will only be 21 Million EVER MADE!"
                     security="Bitcoin Blockchain is secure, with little on-chain vulnerabilities."
                    unitofaccount="The FED started pricing goods in Bitcoin."
                    pow = "Verification method for consensus requiring effort instead of high quantity of coins."
                    no3rd = "Peer-Peer payments without intermediaries." />
                </tbody>
            </table>
    </div>
  )
}

export default Elements;