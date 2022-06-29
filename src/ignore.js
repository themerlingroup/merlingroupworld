import React from 'react'

const ignore = () => {
  return (
    <div>
             <thead>
                    <div className='grid-item grid-item-1'>
                        <img src={decentralized} className="decent-img" alt='pic' />
                    </div> 
                    <div className='grid-item grid-item-2'>
                    <img src={immutable} className="imm-img" alt='pic' />
                    </div>
                    <div className='grid-item grid-item-3'>
                    <img src={security} className="secure" alt='pic' />
                    </div>
                    <div className='grid-item grid-item-4'>
                        <img src={unitofacc} className="uoa" alt="pic" />
                    </div>
                    <div className='grid-item grid-item-5'>
                        <img src={pow} className="pow" alt="pic" />
                    </div>
                    <div className='grid-item grid-item-6'>
                        <img src={no3rd} className="thirdparty" alt='pic' />
                    </div>
                </thead>
    </div>
  )
}

export default ignore